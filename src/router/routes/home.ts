import { RouteRecordRaw } from "vue-router";
import TheLayout from "@/layout/TheLayout.vue";

const homeRoutes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "home",
    component: TheLayout,
    meta: {
      title: "首页",
      icon: "home",
    },
    children: [
      {
        path: "home",
        component: () => import("@/views/Home/HomeView.vue"),
      },
    ],
  },
];

export default homeRoutes;
