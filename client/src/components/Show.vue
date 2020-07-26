<template>
  <div class="show">

        <h3>{{title}}</h3>

        <div
          v-for="item in items"
          v-bind:key="item._id"
          style="padding-bottom: 5px;cursor: pointer"
          @click="execute(item)"
        >
          
        </div>
  </div>
</template>

<script>
// <el-card shadow="always">{{item[keyname]}}</el-card>
export default {
  name: "show",
  props: {
    items: Array,
    keyname: String,
    title: String,
    callback: Function,
  },
  methods: {
    execute(item) {
      this.callback(item);
    },
  },
};
</script>

<style scoped>
</style>
