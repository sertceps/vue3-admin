import { RouteRecordRaw } from "vue-router";
import TheLayout from "@/layout/TheLayout.vue";

const editorRoutes: Array<RouteRecordRaw> = [
  {
    path: "/editor",
    component: TheLayout,
    redirect: "/editor/basic",
    meta: {
      title: "editor",
      icon: "editor",
      alwaysShow: true,
    },
    children: [
      {
        path: "basic",
        component: () => import("@/views/Editor/EditorBasicView.vue"),
        meta: {
          title: "editorBasic",
        },
      },
    ],
  },
];

export default editorRoutes;
