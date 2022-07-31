import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import jQuery from "jquery";
window.$ = window.jQuery = jQuery;
import "bootstrap";
import "popper.js";
import "./assets/app.scss";

createApp(App).use(store).use(router).mount("#app");
