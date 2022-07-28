<template>
  <div class="nav-icon-tooltip" @click="isDrawerOpen = true">
    <el-tooltip :content="$t('nav.themeSelect.tooltip')">
      <VIcon type="theme" :size="24" />
    </el-tooltip>
  </div>
  <!-- TODO model-value & update 双向绑定 -->
  <ThemeSelectDrawer v-model="isDrawerOpen" />
</template>

<script setup lang="ts">
import VIcon from "@/components/VIcon/VIcon.vue";
import { ref } from "vue";
import ThemeSelectDrawer from "./ThemeSelectDrawer.vue";
// import { generateColors } from "@/utils/theme";

const isDrawerOpen = ref(false);
</script>

<style lang="scss" scoped></style>
