import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";

// css
import "@/styles/index.scss";

// 批量注册 svg/icons
import "@/assets/svg/icons";
// SIcon 和 VIcon 组件
import SIcon from "@/components/SIcon/SIcon.vue";
import VIcon from "@/components/VIcon/VIcon.vue";

const app = createApp(App);

app.component("SIcon", SIcon);
app.component("VIcon", VIcon);

app.use(createPinia());
app.use(router);
app.mount("#app");
