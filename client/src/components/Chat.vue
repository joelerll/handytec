<template>
  <div class="chat">
    <h3>{{username}}</h3>
    <div v-for="(message,i) in chat" v-bind:key="i">
      <p>{{message.by}} - {{message.message}}</p>
    </div>
    <input type="text" v-model="message" />
    <button @click="sendMessage()">send</button>
  </div>
</template>

<script>
import Api from "../api";


export default {
  name: "Chat",
  data: () => {
    return {
      message: "",
      chat: [],
      username: localStorage.username
    };
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
          this.$socket.client.emit('message', message)
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>