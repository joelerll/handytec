<template>
  <v-container>
    <v-row no-gutters>
      <v-col sm="2" class="scrollable">
        <v-list subheader>
        <v-subheader>Chat con {{partnername}}</v-subheader>
      </v-list>
      </v-col>
      <v-col sm="10" style="position: relative;">
        <div class="chat-container" v-on:scroll="onScroll" ref="chatContainer" >
          <message :messages="messages" @imageLoad="scrollToEnd"></message>
        </div>
        <div class="typer">
          <input type="text" placeholder="Escribir aqui..." v-on:keyup.enter="sendMessage" v-model="content">
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import Message from './parts/Message.vue'
  import Api from "../../api";

  export default {
    data () {
      return {
        content: '',
        chatMessages: [],
        username: "",
        totalChatHeight: 0,
        chat: [],
        partnername: ""
      }
    },
    props: [
      'id'
    ],
    mounted () {
      if (!localStorage.username) {
        this.$router.push("/");
      }
      this.ChatGet();
      const message = {
        by: localStorage.username,
        roomname: localStorage.roomname,
      }
      this.partnername = localStorage.partnername
      this.username = localStorage.username
      this.$socket.client.emit("join", message);
    },
    components: {
      'message': Message,
    },
    computed: {
      messages () {
        return this.chat
      },
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
        this.scrollToEnd()
      }
    },
    methods: {
      ChatGet () {
      Api.RoomsFetch.GetOne(localStorage.roomid)
        .then((resp) => {
          this.chat = resp.data.chat;
          this.scrollToEnd()
        })
        .catch((err) => {
          console.log(err);
        });
    },
    onScroll () {
      let scrollValue = this.$refs.chatContainer.scrollTop
      if (scrollValue < 100 && !this.loading) {
        this.totalChatHeight = this.$refs.chatContainer.scrollHeight
        this.loading = true
        let currentTopMessage = this.chatMessages[0]
        if (currentTopMessage === undefined) {
          this.loading = false
          return
        }
      }
    },
    sendMessage () {
      const message = {
        by: localStorage.username,
        message: this.content,
        to: localStorage.partnername,
        roomname: localStorage.roomname
      }
      Api.RoomsFetch.Message(localStorage.roomid, message)
      .then(() => {
        this.content = ""
        this.scrollToEnd()
        this.$socket.client.emit('message', message)
      })
      .catch((err) => {
        console.log(err);
      });
    },
    scrollToEnd () {
      this.$nextTick(() => {
        var container = this.$el.querySelector('.chat-container')
        container.scrollTop = container.scrollHeight
      })
    },
    scrollTo () {
      this.$nextTick(() => {
        let currentHeight = this.$refs.chatContainer.scrollHeight
        let difference = currentHeight - this.totalChatHeight
        var container = this.$el.querySelector('.chat-container')
        container.scrollTop = difference
      })
    },
    }
  }
</script>

<style>
  .scrollable {
    overflow-y: auto;
    height: 90vh;
  }
  .typer{
    box-sizing: border-box;
    display: flex;
    align-items: center;
    bottom: 0;
    height: 4.9rem;
    width: 100%;
    background-color: #fff;
    box-shadow: 0 -5px 10px -5px rgba(0,0,0,.2);
  }
  .typer input[type=text]{
    position: absolute;
    left: 2.5rem;
    padding: 1rem;
    width: 80%;
    background-color: transparent;
    border: none;
    outline: none;
    font-size: 1.25rem;
  }
  .chat-container{
    box-sizing: border-box;
    height: calc(100vh - 9.5rem);
    overflow-y: auto;
    padding: 10px;
    background-color: #f2f2f2;
  }
  .message{
    margin-bottom: 3px;
  }
  .message.own{
    text-align: right;
  }
  .message.own .content{
    background-color: lightskyblue;
  }
  .chat-container .username{
    font-size: 18px;
    font-weight: bold;
  }
  .chat-container .content{
    padding: 8px;
    background-color: lightgreen;
    border-radius: 10px;
    display:inline-block;
    box-shadow: 0 1px 3px 0 rgba(0,0,0,0.2), 0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12);
    max-width: 50%;
    word-wrap: break-word;
    }
  @media (max-width: 480px) {
    .chat-container .content{
      max-width: 60%;
    }
  }

</style>
