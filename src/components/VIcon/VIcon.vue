<!-- 字节图标封装 -->
<!-- https://iconpark.oceanengine.com/official -->
<template>
  <component
    :is="currentIcon"
    class="v-icon"
    :theme="theme"
    :size="size"
    :fill="fill"
    :spin="spin"
    :stroke-linecap="strokeLinecap"
    :stroke-linejoin="strokeLinejoin"
    :stroke-width="strokeWidth"
  />
</template>

<script setup lang="ts">
import { withDefaults, computed } from "vue";
import { kebab2Camel } from "@/utils/utils";
import IconDic from "./icon-setup";

interface Theme {
  type: string; // 图标名称
  theme?: "outline" | "filled" | "two-tone" | "multi-color";
  fill?: string | string[];
  size?: number | string;
  spin?: boolean;
  strokeLinecap?: "butt" | "round" | "square";
  strokeLinejoin?: "miter" | "round" | "bevel";
  strokeWidth?: number;
}

const props = withDefaults(defineProps<Theme>(), {
  type: "",
  theme: "outline",
  size: "1em",
  spin: false,
  fill: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 4,
});

const currentIcon = computed(() =>
  props.type === "" ? null : IconDic[kebab2Camel(props.type)]
);
</script>

<style lang="scss" scoped>
.v-icon {
  display: inline-flex;
  justify-content: center;
  align-items: center;
}
</style>
