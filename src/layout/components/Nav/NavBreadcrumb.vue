<template>
  <el-breadcrumb separator="/">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item
        v-for="(item, index) in breadcrumbData"
        :key="item.path"
      >
        <!-- 不可点击 -->
        <span v-if="index === breadcrumbData.length - 1">{{
          item.meta?.title
        }}</span>
        <!-- 可点击 -->
        <a v-else @click.prevent="handleLink(item)">{{ item.meta?.title }}</a>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script setup lang="ts">
import router from "@/router";
import { ref, watch } from "vue";
import { RouteLocationMatched, RouteRecordRaw, useRoute } from "vue-router";

const route = useRoute();
/** 面包屑数据 */
const breadcrumbData = ref([] as Array<RouteLocationMatched>);
/** 监听路由变动 */
watch(
  route,
  () => {
    breadcrumbData.value = route.matched.filter(
      (item) => item.meta && item.meta.title
    );
  },
  {
    // 默认情况下watch是惰性的，当我们设置`immediate: true`时，watch会在初始化时立即执行回调函数。
    immediate: true,
  }
);
/**面包屑点击跳转 */
const handleLink = (item: RouteRecordRaw) => {
  router.push(item.path);
};
</script>

<style lang="scss" scoped></style>
