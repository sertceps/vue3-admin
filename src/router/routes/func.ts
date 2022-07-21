import TheLayout from "@/layout/TheLayout.vue";
import { RouteRecordRaw } from "vue-router";

const funcRoutes: Array<RouteRecordRaw> = [
  {
    path: "/func",
    component: TheLayout,
    redirect: "/func/image-clip",
    meta: {
      title: "func",
      icon: "func",
    },
    children: [
      {
        path: "image-clip",
        component: () => import("@/views/Func/FuncImageClipView.vue"),
        meta: {
          title: "funcImageClip",
        },
      },
      {
        path: "dialog-drag",
        component: () => import("@/views/Func/FuncDialogDragView.vue"),
        meta: {
          title: "funcDialogDrag",
        },
      },
      {
        path: "video-play",
        component: () => import("@/views/Func/FuncVideoPlayView.vue"),
        meta: {
          title: "funcVideoPlay",
        },
      },
    ],
  },
];

export default funcRoutes;
