<template>
  <div id="Main">
    <div>
      <UsersConnected />
    </div>
  </div>
</template>

<script>
import UsersConnected from "./UsersConnected";
import Api from "../api";

export default {
  name: "Main",
  components: {
    UsersConnected,
  },
  data: () => {
    return {
      message: "",
      users: {},
    };
  },
  created() {},
  methods: {
    UsersGet() {
      Api.UsersFetch.Get()
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    RoomsGet() {
      Api.RoomFetch.Get()
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    clickButton: function () {
      this.$socket.chat.emit("message", this.message);
    },
  },
};
</script>

<style>
</style>
