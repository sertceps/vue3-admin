<template>
  <div @click="onClick">
    <el-button id="guide-start">
      引导
      <VIcon type="guide-board" />
    </el-button>
  </div>
</template>

<script setup lang="ts">
import VIcon from "../VIcon/VIcon.vue";

import Driver from "driver.js";
import "driver.js/dist/driver.min.css";
import { onMounted } from "vue";
import steps from "./steps";

let driver: null | Driver = null;

onMounted(() => {
  driver = new Driver({
    // 禁止点击蒙版关闭
    allowClose: false,
    // TODO 国际化
    closeBtnText: "关闭",
    nextBtnText: "下一个",
    prevBtnText: "上一个",
    doneBtnText: "完成",
  });
});

function onClick() {
  driver?.defineSteps(steps());
  driver?.start();
}
</script>

<style lang="scss" scoped></style>
