<template>
  <div class="users">
    <Show v-bind:items="users" keyname="username" title="Usuarios" :callback="open"></Show>

    <div class="text-center">
        <v-dialog
        v-model="dialog"
        width="500"
        >
        <template >
        </template>

        <v-card>
          <v-card-title class="headline grey lighten-2" >
            Ingresa tu usuario
          </v-card-title>

          <v-card-text>
            <v-text-field label="Usuario" required v-model="username"></v-text-field>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              text
              @click="dialog = false; enviar()"
            >
              Entrar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>

<script>
import Show from "./Show";
import Api from "../api";

import moment from 'moment'
moment.locale('es');

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
      dialog: false,
      username: "",
      item: {},
      users: [],
    };
  },
  created() {
    this.RoomsGet();
  },
  filters: {
    date: (data) => {
      return moment(data).format("YYYYY");
    }
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
    enviar () {
      const body = { username: this.username, partner: this.item.username };
      Api.UsersFetch.Create(body)
        .then((resp) => {
          localStorage.username = resp.data.User.username;
          localStorage.roomname = resp.data.Room.name;
          localStorage.roomid = resp.data.Room._id;
          localStorage.partnername = resp.data.Partner.username;
          this.$router.push("/chat");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    open(item) {
      this.item = item;
      this.dialog = true
    },
  },
};
</script>

<style scoped>
</style>
