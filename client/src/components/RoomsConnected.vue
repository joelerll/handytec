<template>
  <div class="rooms">
    <Show v-bind:items="rooms" keyname="name" title="Grupos" :callback="go"></Show>
  </div>
</template>

<script>
import Show from "./Show";
import Api from "../api";

export default {
  name: "RoomsConnected",
  components: {
    Show,
  },
  data: () => {
    return {
      rooms: [
        {
          name: "holis",
        },
        {
          name: "holis",
        },
        {
          name: "holis",
        },
        {
          name: "holis",
        },
      ],
    };
  },
  created() {
    // this.RoomsFetch();
  },
  methods: {
    RoomsFetch() {
      Api.RoomsFetch.Get()
        .then((resp) => {
          this.rooms = resp.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    go() {
      console.log("Rooms");
    },
  },
};
</script>

<style scoped>
</style>
