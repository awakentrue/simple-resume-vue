import { createApp } from "vue";
import App from "./App.vue";
import store from "././store/store.js";
import { ClickOutside } from "././directives/clickOutside.js";

createApp(App)
  .use(store)
  .directive("click-outside", ClickOutside)
  .mount("#app");
