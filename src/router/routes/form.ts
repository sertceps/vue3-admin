import TheLayout from "@/layout/TheLayout.vue";
import { RouteRecordRaw } from "vue-router";

const formRoutes: Array<RouteRecordRaw> = [
  {
    path: "/form",
    component: TheLayout,
    redirect: "/form/basic",
    meta: {
      title: "表单",
      icon: "form",
      alwaysShow: true,
    },
    children: [
      {
        path: "basic",
        component: () => import("@/views/Form/FormBasicView.vue"),
        meta: {
          title: "基础表单",
        },
      },
    ],
  },
];

export default formRoutes;
