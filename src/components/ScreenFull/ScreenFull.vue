<template>
  <div @click="onToggle" class="nav-icon-tooltip">
    <el-tooltip :content="isFullScreen ? '取消全屏' : '全屏'">
      <VIcon
        :type="isFullScreen ? 'off-screen' : 'full-screen-one'"
        :size="24"
      />
    </el-tooltip>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import VIcon from "../VIcon/VIcon.vue";
import screenFull from "screenfull";

const isFullScreen = ref(false);

function onToggle() {
  screenFull.toggle();
}

// 监听 screenfull 的变化
function changeIcon() {
  isFullScreen.value = screenFull.isFullscreen;
}
// 绑定监听
onMounted(() => {
  screenFull.on("change", changeIcon);
});
// 取绑监听
onUnmounted(() => {
  screenFull.off("change", changeIcon);
});
</script>

<style lang="scss" scoped></style>
