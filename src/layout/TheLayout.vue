<!-- 只应该拥有单个活跃实例的组件应该以 `The` 前缀命名，以示其唯一性。 -->
<!-- 这并不意味着组件只可被用于一个页面，而是每个页面*只能使用一次。
     这些组件永远不接受任何 prop，因为它们是为你的应用所定制的，而不是它们所在的上下文。 -->

<!-- TODO ISSUE -->
<!-- https://stackoverflow.com/a/70042452 -->
<template>
  <div class="layout-container">
    <AsideBase />
    <main class="main-container">
      <header class="header-container">
        <NavBase />
      </header>
      <div class="tags-view-container">
        <TagsViewBase />
      </div>
      <div class="view-container">
        <!-- 切换动画 + 组件缓存 -->
        <router-view v-slot="{ Component, route }">
          <transition name="fade-transform" mode="out-in">
            <keep-alive>
              <div :key="route.path">
                <component :is="Component" />
              </div>
            </keep-alive>
          </transition>
        </router-view>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import NavBase from "./components/Nav/NavBase.vue";
import AsideBase from "./components/Aside/AsideBase.vue";
import TagsViewBase from "./components/TagsView/TagsViewBase.vue";
// 配置统统放这里 ?
import { useAppStore } from "@/store";
import {
  RouteLocationNormalizedLoaded,
  RouteRecordName,
  useRoute,
} from "vue-router";
import { watch } from "vue";
import { isTags } from "@/utils/tags";
import { generateI18nTitle, watchSwitchLanguage } from "@/utils/i18n";
import { TagsViewRouteRecord } from "@/models/app";

const appStore = useAppStore();

const route = useRoute();
/** 生成 title */
function getTitle(route: RouteLocationNormalizedLoaded | TagsViewRouteRecord) {
  if (!route.meta) {
    const pathArr = route.path.split("/");
    return pathArr[pathArr.length - 1];
  }

  return generateI18nTitle(route.meta.title);
}
/** 监听路由变动，存入 tags view list */
watch(
  route,
  (to) => {
    if (!isTags(to.path)) return;
    const { fullPath, meta, name, params, path, query } = to;
    appStore.addTagsViewList({
      fullPath,
      meta,
      name: name as RouteRecordName | undefined,
      params,
      path,
      query,
      title: getTitle(to),
    });
  },
  {
    immediate: true,
  }
);
/** tags view 国际化 */
watchSwitchLanguage(() => {
  appStore.tagViewList.forEach((route, index) => {
    appStore.changeTagsView(index, {
      ...route,
      title: getTitle(route),
    });
  });
});
</script>

<style lang="scss" scoped>
.layout-container {
  display: flex;
  width: 100vw;
  height: 100vh;
  .main-container {
    flex: 1;
    // 显式指定才能保证 aside 不位移
    overflow-y: auto;
    .header-container {
      // 关于 sticky  https://www.zhangxinxu.com/wordpress/2018/12/css-position-sticky/
      position: sticky;
      top: 0;
      z-index: 999;
    }
    .tags-view-container {
      position: sticky;
      // 离出 nav 高度
      top: 60px;
    }
    .view-container {
      padding: 10px 20px;
      height: 2000px;
    }
  }
}
</style>
