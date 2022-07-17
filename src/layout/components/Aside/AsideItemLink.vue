<template>
  <component :is="type" v-bind="linkProps(props.to)">
    <!-- 填充 item -->
    <slot></slot>
  </component>
</template>

<script setup lang="ts">
import { isExternal } from "@/utils/validate";
import { computed } from "@vue/reactivity";

const props = defineProps({
  to: {
    type: String,
    required: true,
  },
});

const type = computed(() => {
  if (isExternal(props.to)) return "a";
  return "router-link";
});

const linkProps = (to: string) => {
  if (isExternal(props.to))
    return {
      href: to,
      target: "_blank",
      // 避免 blank 安全问题
      ref: "noopener noreferrer",
    };

  return { to };
};
</script>

<style lang="scss" scoped></style>
