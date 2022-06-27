import { RouteRecordRaw } from "vue-router";
import TheyLayout from "@/layout/TheLayout.vue";

const resultRoutes: Array<RouteRecordRaw> = [
  {
    path: "/result",
    component: TheyLayout,
    redirect: "/result/success",
    meta: {
      title: "结果页",
      icon: "result",
    },
    children: [
      {
        path: "success",
        component: () => import("@/views/Result/ResultSuccessView.vue"),
      },
      {
        path: "error",
        component: () => import("@/views/Result/ResultErrorView.vue"),
      },
    ],
  },
];

export default resultRoutes;
