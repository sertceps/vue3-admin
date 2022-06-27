import { RouteRecordRaw } from "vue-router";
import TheLayout from "@/layout/TheLayout.vue";

const editorRoutes: Array<RouteRecordRaw> = [
  {
    path: "/editor",
    component: TheLayout,
    redirect: "/editor/basic",
    meta: {
      title: "编辑器",
      icon: "editor",
    },
    children: [
      {
        path: "basic",
        component: () => import("@/views/Editor/EditorBasicView.vue"),
        meta: {
          title: "基础编辑器",
        },
      },
    ],
  },
];

export default editorRoutes;
