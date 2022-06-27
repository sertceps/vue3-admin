import TheLayout from "@/layout/TheLayout.vue";
import { RouteRecordRaw } from "vue-router";

const guideRoutes: Array<RouteRecordRaw> = [
  {
    path: "/guide",
    component: TheLayout,
    redirect: "/guide/basic",
    meta: {
      title: "引导页",
      icon: "guide",
    },
    children: [
      {
        path: "basic",
        component: () => import("@/views/Guide/GuideBasicView.vue"),
        meta: {
          title: "引导页",
        },
      },
    ],
  },
];

export default guideRoutes;
