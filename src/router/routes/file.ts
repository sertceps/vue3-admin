import TheLayout from "@/layout/TheLayout.vue";
import { RouteRecordRaw } from "vue-router";

const fileRoutes: Array<RouteRecordRaw> = [
  {
    path: "/file",
    component: TheLayout,
    redirect: "/file/image",
    meta: {
      title: "文件相关",
      icon: "file",
    },
    children: [
      {
        path: "image",
        component: () => import("@/views/File/FileImageView.vue"),
        meta: {
          title: "图片上传",
        },
      },
      {
        path: "doc",
        component: () => import("@/views/File/FileDocView.vue"),
        meta: {
          title: "文档上传",
        },
      },
      {
        path: "pdf",
        component: () => import("@/views/File/FilePdfView.vue"),
        meta: {
          title: "PDF 预览",
        },
      },
    ],
  },
];

export default fileRoutes;
