<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { storeToRefs } from "pinia";
// import { computed } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import { usePinia } from "./store/pinia";

const pinia = usePinia();
// const piniaMSG = computed(() => {
//   return pinia.message;
// });

const { message } = storeToRefs(pinia);
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + Vite" />
  <hr />
  <h1>{{ message }}</h1>
</template>

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
