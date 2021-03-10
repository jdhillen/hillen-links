// ==|== Imports ===================================================================================
import { createApp } from "vue";
import App from "./App.vue";
import store from "./assets/js/store";
import router from "./assets/js/router";

// ==|== Create App ================================================================================
createApp(App).use(store).use(router).mount("#app");
