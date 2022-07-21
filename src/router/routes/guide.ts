import TheLayout from "@/layout/TheLayout.vue";
import { RouteRecordRaw } from "vue-router";

const guideRoutes: Array<RouteRecordRaw> = [
  {
    path: "/guide",
    component: TheLayout,
    redirect: "/guide/basic",
    meta: {
      title: "guide",
      icon: "guide",
      alwaysShow: true,
    },
    children: [
      {
        path: "basic",
        component: () => import("@/views/Guide/GuideBasicView.vue"),
        meta: {
          title: "guideBasic",
        },
      },
    ],
  },
];

export default guideRoutes;
