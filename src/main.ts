import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";

// css
import "@/styles/index.scss";
import "@/styles/transition.scss";
// Element-Plus CSS
// import "element-plus/dist/index.css";

// 批量注册 svg/icons
import "@/assets/svg/icons";
// SIcon 和 VIcon 组件

const app = createApp(App);

// 全局注册直接用没有类型提示了
// app.component("SIcon", SIcon);
// app.component("VIcon", VIcon);

app.use(createPinia());
app.use(router);
app.mount("#app");
