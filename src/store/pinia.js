import { defineStore } from "pinia";

export const usePinia = defineStore("pinia", {
  state() {
    return {
      message: "Hello Pinia!",
    };
  },
  getters: {},
  actions: {
    updateMSG(val) {
      this.message = val;
    },
  },
});
