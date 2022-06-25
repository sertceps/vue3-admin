<!-- SVG 图标封装 -->
<template>
  <svg class="svg-icon" aria-hidden="true" :style="{ width: size + 'px' }">
    <use :href="iconName" />
  </svg>
</template>

<script setup lang="ts">
/**
 * 1. 此组件的正常使用依赖于 svg-sprite-loader
 * 要在 vue.config.js 中进行配置
 * 2. 需要通过 require.context 批量注册 svg 文件
 * 详见 @/src/assets/icon/index.ts
 */
import { computed } from "vue";

const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
  size: {
    type: Number,
    default: 24,
  },
});

const iconName = computed(() => `#icon-${props.icon}`);
</script>

<style lang="scss" scoped></style>
