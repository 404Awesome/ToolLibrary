import App from "./App.vue";
import { i18n } from "locales";
import { createApp } from "vue";
import VueRouter from "./router";
import { createPinia } from "pinia";

import "normalize.css";
import "@/assets/css/base.css";

let app = createApp(App);
app.use(i18n);
app.use(VueRouter);
app.use(createPinia());
app.mount("#app");
