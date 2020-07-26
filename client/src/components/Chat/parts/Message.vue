<template>
  <div>
    <div class="message" v-for="(message,index) in messages" v-bind:key="index" :class="{own: message.by == username}">
      <div class="username" v-if="index>0 && messages[index-1].by != message.username" style="color: #9198a3 !important;">{{message.by}}</div>
      <div class="username" v-if="index == 0"><span style="color: #9198a3 !important;">{{message.by}}</span></div>
      <div style="margin-top: 5px"></div>
      <div class="content">
        <div v-html="message.message"></div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    data () {
      return {}
    },
    props: [
      'messages'
    ],
    components: {
    },
    computed: {
      username () {
        return localStorage.username
      }
    },
  }
</script>

<style>
  span.emoji {
    font-size: 20px;
    vertical-align: middle;
    line-height: 2;
  }
</style>
