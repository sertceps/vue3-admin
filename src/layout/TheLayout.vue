<!-- 只应该拥有单个活跃实例的组件应该以 `The` 前缀命名，以示其唯一性。 -->
<!-- 这并不意味着组件只可被用于一个页面，而是每个页面*只能使用一次。
     这些组件永远不接受任何 prop，因为它们是为你的应用所定制的，而不是它们所在的上下文。 -->
<template>
  <div class="layout-container">
    <AsideBase />
    <main class="main-container">
      <header class="header-container">
        <NavBase />
      </header>
      <div class="view-container">
        <router-view />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import NavBase from "./components/Nav/NavBase.vue";
import AsideBase from "./components/Aside/AsideBase.vue";
// 配置统统放这里 ?
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
    .view-container {
      padding: 10px 20px;
      height: 2000px;
    }
  }
}
</style>
