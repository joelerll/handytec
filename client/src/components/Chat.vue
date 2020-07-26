<template>
  <v-container class="chat">
    <v-card
      height="90vh"
      class="overflow-hidden"
    >
      <v-navigation-drawer
        absolute
        dark
        permanent
      >
        <v-list
          dense
          nav
          bottom="false"
        >
          <v-list-item two-line>
            <v-list-item-avatar>
              <avatar :username="username"></avatar>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>{{username}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>

          <v-list-item
          >
            <v-list-item-icon>
              <avatar :username="partnername"></avatar>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{partnername}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-card-text style="overflow: scroll;margin-left: 300px; overflow: visible; height: 50px;">
          <p  v-for="(message,i) in chat" v-bind:key="i" style="">{{message.by}} - {{message.message}}</p>
      </v-card-text>
      <v-footer
        absolute
        class="font-weight-medium"
      >
       <v-row no-gutters>
        <v-col
          class="text-center"
          cols="12"
        >
          <v-text-field label="Escriba su mensaje" required v-model="message"></v-text-field>
        </v-col>
        <v-col
          class="text-center"
          cols="12"
        >
          <v-btn
            @click="sendMessage()"
          >
            <v-icon dark>mdi-send</v-icon>
          </v-btn>
        </v-col>
       </v-row>
      </v-footer>
    </v-card>
  </v-container>
</template>

<script>
import Api from "../api";
import Avatar from 'vue-avatar'

export default {
  name: "Chat",
  data: () => {
    return {
      message: "",
      chat: [],
      username: localStorage.username,
      partner: localStorage.partnername
    };
  },
  components: {
    Avatar
  },
  sockets: {
    connect() {
      const message = {
        by: localStorage.username,
        roomname: localStorage.roomname,
      }
      this.$socket.client.emit("join", message);
    },
    MESSAGE: function (message) {
      this.chat.push(message)
    }
  },
  created() {
    this.ChatGet();
    const message = {
      by: localStorage.username,
      roomname: localStorage.roomname,
    }
    this.partnername = localStorage.partnername
    this.username = localStorage.username
    this.$socket.client.emit("join", message);
  },
  methods: {
    ChatGet () {
      Api.RoomsFetch.GetOne(localStorage.roomid)
        .then((resp) => {
          this.chat = resp.data.chat;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    sendMessage() {
      const message = {
        by: localStorage.username,
        message: this.message,
        to: localStorage.partnername,
        roomname: localStorage.roomname
      }
      Api.RoomsFetch.Message(localStorage.roomid, message)
        .then(() => {
          this.message = ""
          this.$socket.client.emit('message', message)
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>