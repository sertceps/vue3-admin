import TheLayout from "@/layout/TheLayout.vue";
import { RouteRecordRaw } from "vue-router";

const i18nRoutes: Array<RouteRecordRaw> = [
  {
    path: "/i18n",
    component: TheLayout,
    redirect: "/i18n/basic",
    meta: {
      title: "i18n",
      icon: "i18n",
      alwaysShow: true,
    },
    children: [
      {
        path: "basic",
        component: () => import("@/views/I18n/I18nBasicView.vue"),
        meta: {
          title: "i18nBasic",
        },
      },
    ],
  },
];

export default i18nRoutes;
