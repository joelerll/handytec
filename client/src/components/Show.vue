<template>
  <div class="show" style="padding: 50px;">
    <v-row>
        <div
          v-for="item in items"
          v-bind:key="item._id"
          style="padding-bottom: 5px;cursor: pointer"
          @click="execute(item)"
        >
          <v-col>
             <v-card
              class="pa-2 rounded"
              max-width="344"
              outlined
              tile
            >
              <v-list-item three-line>
                <v-list-item-content>
                  <v-list-item-title class="headline mb-1">{{item[keyname]}}</v-list-item-title>
                  <v-list-item-subtitle>Creado el {{item.createdAt | date("LLLL") }}</v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-avatar
                ><avatar :username="item[keyname]"></avatar></v-list-item-avatar>
              </v-list-item>

              <v-card-actions>
                <v-btn text @click="execute">Chatear</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          
        </div>
    </v-row>
  </div>
</template>

<script>
import Avatar from 'vue-avatar'
import moment from 'moment'
moment.locale('es');

export default {
  name: "show",
  components: {
    Avatar
  },
  filters: {
    date: (data, format = "YY") => {
      return moment(data).format(format);
    }
  },
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
