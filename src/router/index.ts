import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import editorRoutes from "./routes/editor";
import errorRoutes from "./routes/error";
import excelRoutes from "./routes/excel";
import fileRoutes from "./routes/file";
import formRoutes from "./routes/form";
import funcRoutes from "./routes/func";
import guideRoutes from "./routes/guide";
import homeRoutes from "./routes/home";
import i18nRoutes from "./routes/i18n";
import resultRoutes from "./routes/result";
import tableRoutes from "./routes/table";

const routes: Array<RouteRecordRaw> = [
  ...editorRoutes,
  ...excelRoutes,
  ...fileRoutes,
  ...formRoutes,
  ...funcRoutes,
  ...guideRoutes,
  ...homeRoutes,
  ...i18nRoutes,
  ...resultRoutes,
  ...tableRoutes,
  // 错误处理路由
  ...errorRoutes,
];

// TODO history / hash
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
