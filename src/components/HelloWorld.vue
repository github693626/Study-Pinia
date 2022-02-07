<script setup>
import { ref, computed } from "vue";
import { usePinia } from "../store/pinia";

defineProps({
  msg: String,
});

const count = ref(0);

const pinia = usePinia();
const piniaMSG = computed({
  get() {
    return pinia.message;
  },
  set(val) {
    pinia.message = val;

    // pinia.$patch({ message: val });

    // pinia.$patch((state) => {
    //   state.message = val;
    // });

    // pinia.updateMSG(val);

    
  },
});
</script>

<template>
  <h1>{{ msg }}</h1>
  <input type="text" v-model="piniaMSG" />
  <h2>{{ piniaMSG }}</h2>
  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Documentation
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button type="button" @click="count++">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
