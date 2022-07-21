import { RouteRecordRaw } from "vue-router";
import TheyLayout from "@/layout/TheLayout.vue";

const resultRoutes: Array<RouteRecordRaw> = [
  {
    path: "/result",
    component: TheyLayout,
    redirect: "/result/success",
    meta: {
      title: "result",
      icon: "result",
    },
    children: [
      {
        path: "success",
        component: () => import("@/views/Result/ResultSuccessView.vue"),
        meta: {
          title: "resultSuccess",
          icon: "success",
        },
      },
      {
        path: "fail",
        component: () => import("@/views/Result/ResultErrorView.vue"),
        meta: {
          title: "resultFail",
        },
      },
    ],
  },
];

export default resultRoutes;
