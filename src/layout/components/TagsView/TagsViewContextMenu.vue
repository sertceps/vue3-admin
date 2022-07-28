<!-- TODO 国际化 -->
<template>
  <ul class="context-menu-container">
    <li @click="onRefresh">刷新</li>
    <li @click="onCloseRight">关闭右侧</li>
    <li @click="onCloseOther">关闭其它</li>
  </ul>
</template>

<script setup lang="ts">
import router from "@/router";
import { useAppStore } from "@/store";

const appStore = useAppStore();

const props = defineProps({
  index: {
    type: Number,
    required: true,
  },
});

// TODO useRoute
// const route = useRoute();
/** 刷新 */
function onRefresh() {
  router.go(0);
}
/** 关闭右侧 */
function onCloseRight() {
  appStore.removeTagsView("right", props.index);
}
/** 关闭其它 */
function onCloseOther() {
  appStore.removeTagsView("other", props.index);
}
</script>

<style lang="scss" scoped>
.context-menu-container {
  position: fixed;
  background: #fff;
  z-index: 9999;
  list-style-type: none;
  padding: 5px 0;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 400;
  color: #333;
  box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.3);
  li {
    margin: 0;
    padding: 7px 16px;
    cursor: pointer;
    &:hover {
      background: #eee;
    }
  }
}
</style>
