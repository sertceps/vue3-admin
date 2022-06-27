import { RouteRecordRaw } from "vue-router";
import TheLayout from "@/layout/TheLayout.vue";

const errorRoutes: Array<RouteRecordRaw> = [
  {
    path: "/error",
    component: TheLayout,
    redirect: "/error/403",
    meta: {
      title: "错误页",
      icon: "error",
    },
    children: [
      {
        path: "403",
        component: () => import("@/views/Error/Error403View.vue"),
        meta: {
          title: "403",
        },
      },
      {
        path: "500",
        component: () => import("@/views/Error/Error500View.vue"),
        meta: {
          title: "500",
        },
      },
      {
        path: "404",
        component: () => import("@/views/Error/Error404View.vue"),
        meta: {
          title: "404",
        },
      },
      {
        name: "NotFound",
        path: "/:pathMatch(.*)*",
        redirect: "/error/404",
      },
    ],
  },
];

export default errorRoutes;
