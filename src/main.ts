import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";

// 批量注册 svg/icons
import "@/assets/svg/icons";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.mount("#app");
