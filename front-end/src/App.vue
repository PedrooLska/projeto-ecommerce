<template>
  <v-app class="app">
    <Header class="header" />

    <router-view></router-view>
  </v-app>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },
  data: () => ({}),
};
</script>

<style>
.header {
  height: 100vh;
}
</style>
