import TheLayout from "@/layout/TheLayout.vue";
import { RouteRecordRaw } from "vue-router";

const excelRoutes: Array<RouteRecordRaw> = [
  {
    path: "/excel",
    component: TheLayout,
    redirect: "/excel/export",
    meta: {
      title: "Excel",
      icon: "excel",
    },
    children: [
      {
        path: "export",
        component: () => import("@/views/Excel/ExcelExportView.vue"),
        meta: {
          title: "导出 Excel",
        },
      },
    ],
  },
];

export default excelRoutes;
