<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <input type="text" v-model="message" />
    <button v-on:click="clickButton">Enviar</button>
  </div>
</template>

<script>
import Api from "./api"

export default {
  name: "App",
  components: {
    // HelloWorld,
  },
  data: () => {
    return {
      message: "",
      users: {}
    };
  },
  created (){
    this.userGet()
  },
  methods: {
    userGet () {
      Api.UsersFetch.Get().then((data) => {
        console.log(data)
      }).catch((err) => {
        console.log(err)
      })
    },
    clickButton: function () {
      console.log(this.$socket);
      this.$socket.chat.emit("message", this.message);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
