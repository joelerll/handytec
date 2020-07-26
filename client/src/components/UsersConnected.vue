<template>
  <div class="users">
    <!-- <button @click="open()">New</button> -->
    <Show v-bind:items="users" keyname="username" title="Usuarios" :callback="open"></Show>
  </div>
</template>

<script>
import Show from "./Show";
import Api from "../api";

export default {
  name: "UsersConnected",
  components: {
    Show,
  },
  props: {
    msg: String,
  },
  data: () => {
    return {
      users: [
        {
          username: "joelerll",
        },
        {
          username: "Carlos",
        },
        {
          username: "Andres",
        },
        {
          username: "Martinez",
        },
      ],
    };
  },
  created() {
    this.RoomsGet();
  },
  methods: {
    RoomsGet() {
      Api.UsersFetch.Get()
        .then((resp) => {
          this.users = resp.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    open(item) {
      this.$prompt("Ingrese usuario", "Usuario", {
        confirmButtonText: "OK",
        cancelButtonText: "Cancel",
      })
        .then(({ value }) => {
          const body = { username: value, partner: item.username };
          Api.UsersFetch.Create(body)
            .then((resp) => {
              console.log(resp)
              // localStorage.username = value;
              localStorage.username = resp.data.User.username;
              localStorage.roomname = resp.data.Room.name;
              localStorage.roomid = resp.data.Room._id;
              localStorage.partnername = resp.data.Partner.username;
              this.$router.push("/chat");
              this.$message({
                type: "success",
                message: "Entrando al chat",
              });
            })
            .catch((err) => {
              console.log(err);
              this.$message({
                type: "error",
                message: "Error",
              });
            });
        })
        .catch(() => {
          // console.log(err);
          // this.$message({
          //   type: "info",
          //   message: "Cancelado",
          // });
        });
    },
  },
};
</script>

<style scoped>
</style>
