<!-- 本体用 -box，容器用 -container -->
<template>
  <el-menu class="el-menu-box">
    <AsideItem />
  </el-menu>
</template>

<script setup lang="ts">
import AsideItem from "./AsideItem.vue";
</script>

<style lang="scss" scoped>
@import "@/styles/variable.module.scss";

.el-menu-box {
  width: $sideMenuWidth;
}
</style>
