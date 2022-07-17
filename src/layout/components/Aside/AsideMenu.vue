<!-- 本体用 -box，容器用 -container -->
<template>
  <el-menu :collapse="appStore.isAsideMenuFolded" class="sidebar-menu">
    <AsideItem
      v-for="route in getRoutes()"
      :key="route.path"
      :item="route"
      :base-path="route.path"
    />
  </el-menu>
</template>

<script setup lang="ts">
import { useAppStore } from "@/store";
import { getRoutes } from "@/router";
import AsideItem from "./AsideItem.vue";

const appStore = useAppStore();
</script>

<style lang="scss" scoped>
.sidebar-menu {
  height: 100vh;
}
</style>
