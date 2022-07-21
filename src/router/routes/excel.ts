import TheLayout from "@/layout/TheLayout.vue";
import { RouteRecordRaw } from "vue-router";

const excelRoutes: Array<RouteRecordRaw> = [
  {
    path: "/excel",
    component: TheLayout,
    redirect: "/excel/export",
    meta: {
      title: "excel",
      icon: "excel",
      alwaysShow: true,
    },
    children: [
      {
        path: "export",
        component: () => import("@/views/Excel/ExcelExportView.vue"),
        meta: {
          title: "excelExport",
        },
      },
    ],
  },
];

export default excelRoutes;
