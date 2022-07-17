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
        meta: {
          title: "成功",
          icon: "success",
        },
      },
      {
        path: "error",
        component: () => import("@/views/Result/ResultErrorView.vue"),
        meta: {
          title: "错误",
        },
      },
    ],
  },
];

export default resultRoutes;
