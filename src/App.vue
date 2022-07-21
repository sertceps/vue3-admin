<template>
  <el-config-provider :locale="locale">
    <router-view />
  </el-config-provider>
</template>

<script lang="ts" setup>
import zhCn from "element-plus/es/locale/lang/zh-cn";
import en from "element-plus/es/locale/lang/en";
import { ElConfigProvider } from "element-plus";
import { computed } from "@vue/reactivity";
import { useAppStore } from "./store";

const appStore = useAppStore();
/** element 语言切换 */
const locale = computed(() => (appStore.language === "zh" ? zhCn : en));
</script>

<style lang="scss" scoped></style>
