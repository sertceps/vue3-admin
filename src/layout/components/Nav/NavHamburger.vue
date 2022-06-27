<template>
  <div class="fold-container" @click="toggleAsideMenu">
    <VIcon type="menu-fold-one" :size="24" />
  </div>
</template>

<script setup lang="ts">
import { useAppStore } from "@/store";

const appStore = useAppStore();

/** 侧边菜单展开折叠 */
function toggleAsideMenu() {
  appStore.toggleAsideMenu();
}
</script>

<style lang="scss" scoped>
.fold-container {
  @include flex-center;
  cursor: pointer;
  height: 100%;
  width: 30px;
}
</style>
