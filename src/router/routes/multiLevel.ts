/**
 * 多级菜单路由
 */
import TheLayout from "@/layout/TheLayout.vue";
import { RouteRecordRaw } from "vue-router";

const multiLevelRoutes: Array<RouteRecordRaw> = [
  {
    path: "/multi-level",
    component: TheLayout,
    meta: {
      title: "multiLevel",
      icon: "nesting",
    },
    children: [
      {
        path: "level1",
        component: () => import("@/views/MultiLevel/MultiLevelOneView.vue"),
        meta: {
          title: "multiLevel1",
        },
        children: [
          {
            path: "level2",
            component: () => import("@/views/MultiLevel/MultiLevelTwoView.vue"),
            meta: {
              title: "multiLevel2",
            },
            children: [
              {
                path: "level3",
                component: () => import("@/views/MultiLevel/MultiLevelThreeView.vue"),
                meta: {
                  title: "multiLevel3",
                  //! alwaysShow 不设置为 true 会直接展示第四级
                  alwaysShow: true,
                },
                children: [
                  {
                    path: "level4",
                    component: () => import("@/views/MultiLevel/MultiLevelFourView.vue"),
                    meta: {
                      title: "multiLevel4",
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

export default multiLevelRoutes;
