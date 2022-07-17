import TheLayout from "@/layout/TheLayout.vue";
import { RouteRecordRaw } from "vue-router";

const tableRoutes: Array<RouteRecordRaw> = [
  {
    path: "/table",
    component: TheLayout,
    redirect: "/table/basic",
    meta: {
      title: "表格页",
      icon: "table",
      alwaysShow: true,
    },
    children: [
      {
        path: "basic",
        component: () => import("@/views/Table/TableBasicView.vue"),
        meta: {
          title: "基础表格",
        },
      },
    ],
  },
];

export default tableRoutes;
