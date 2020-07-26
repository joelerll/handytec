<template>
  <div id="app">
    <v-app> 
      <v-app-bar app color="primary" dark>
        <div class="d-flex align-center">
          <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            src="handytec.svg"
            width="200"
          />
          <h1>Chat</h1>
        </div>

        <v-spacer></v-spacer>

        <v-btn
          href="https://www.handytec.mobi/"
          target="_blank"
          text
        >
          <span class="mr-2">Página Web</span>
          <v-icon>mdi-open-in-new</v-icon>
        </v-btn>
      </v-app-bar>

      <v-main>
        <router-view></router-view>
      </v-main>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>