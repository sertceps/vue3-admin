<template>
  <div
    class="aside-base-container"
    :class="{ 'aside-base-container-folded': appStore.isAsideMenuFolded }"
  >
    <AsideMenu />
  </div>
</template>

<script setup lang="ts">
import AsideMenu from "./AsideMenu.vue";
import { useAppStore } from "@/store";

const appStore = useAppStore();
</script>

<style lang="scss" scoped>
.aside-base-container {
  width: $sideMenuWidth;
  transition: width 0.28s ease-in-out;
}

.aside-base-container-folded {
  width: $sideMenuFoldedWidth;
}
</style>
