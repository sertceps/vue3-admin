import TheLayout from "@/layout/TheLayout.vue";
import { RouteRecordRaw } from "vue-router";

const funcRoutes: Array<RouteRecordRaw> = [
  {
    path: "/func",
    component: TheLayout,
    redirect: "/func/image-clip",
    meta: {
      title: "功能",
      icon: "func",
    },
    children: [
      {
        path: "image-clip",
        component: () => import("@/views/Func/FuncImageClipView.vue"),
        meta: {
          title: "图片裁剪",
        },
      },
      {
        path: "dialog-drag",
        component: () => import("@/views/Func/FuncDialogDragView.vue"),
        meta: {
          title: "弹窗拖拽",
        },
      },
      {
        path: "video-play",
        component: () => import("@/views/Func/FuncVideoPlayView.vue"),
        meta: {
          title: "视频播放",
        },
      },
    ],
  },
];

export default funcRoutes;
