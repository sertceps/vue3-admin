import TheLayout from "@/layout/TheLayout.vue";
import { RouteRecordRaw } from "vue-router";

const fileRoutes: Array<RouteRecordRaw> = [
  {
    path: "/file",
    component: TheLayout,
    redirect: "/file/image",
    meta: {
      title: "file",
      icon: "file",
    },
    children: [
      {
        path: "image",
        component: () => import("@/views/File/FileImageView.vue"),
        meta: {
          title: "fileImage",
        },
      },
      {
        path: "doc",
        component: () => import("@/views/File/FileDocView.vue"),
        meta: {
          title: "fileDoc",
        },
      },
      {
        path: "pdf",
        component: () => import("@/views/File/FilePdfView.vue"),
        meta: {
          title: "filePdf",
        },
      },
    ],
  },
];

export default fileRoutes;
