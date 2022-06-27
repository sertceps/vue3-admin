<!-- 本体用 -box，容器用 -container -->
<template>
  <el-menu
    :collapse="appStore.isAsideMenuFolded"
    :class="[appStore.isAsideMenuFolded ? 'el-menu-box-folded' : 'el-menu-box']"
  >
    <AsideItem />
  </el-menu>
</template>

<script setup lang="ts">
import { useAppStore } from "@/store";
import AsideItem from "./AsideItem.vue";

const appStore = useAppStore();
</script>

<style lang="scss" scoped></style>
