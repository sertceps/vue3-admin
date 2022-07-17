import { RouteRecordRaw } from "vue-router";
import TheLayout from "@/layout/TheLayout.vue";

const homeRoutes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "home",
    component: TheLayout,
    children: [
      {
        path: "home",
        component: () => import("@/views/Home/HomeView.vue"),
        meta: {
          title: "首页",
          icon: "home",
        },
      },
    ],
  },
];

export default homeRoutes;
