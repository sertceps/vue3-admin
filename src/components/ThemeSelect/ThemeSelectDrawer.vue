<!-- TODO :model-value -->
<template>
  <!-- 抽屉 -->
  <el-drawer
    title="主题设置"
    :model-value="modelValue"
    @close="closed"
    width="22%"
  >
    <div class="content">
      <p class="title">颜色选择</p>
      <el-color-picker
        v-model="mColor"
        :predefine="predefineColor"
        @change="colorChangeHandle"
      />
    </div>

    <template #footer>
      <el-button @click="closed">关闭</el-button>
      <el-button type="primary" @click="confirm">确定</el-button>
    </template>
  </el-drawer>
</template>

<script setup lang="ts">
import { useAppStore } from "@/store";
import { ref, defineEmits } from "vue";

const appStore = useAppStore();

defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
});

const emits = defineEmits(["update:modelValue"]);

const mColor = ref(appStore.mainColor);
const predefineColor = ref([
  "#ff4500",
  "#ff8c00",
  "#ffd700",
  "#90ee90",
  "#00ced1",
  "#1e90ff",
  "#c71585",
  "rgba(255, 69, 0, 0.68)",
  "rgb(255, 120, 0)",
  "hsv(51, 100, 98)",
  "hsva(120, 40, 94, 0.5)",
  "hsl(181, 100%, 37%)",
  "hsla(209, 100%, 56%, 0.73)",
  "#c7158577",
]);

function colorChangeHandle(color: string) {
  console.log(color);
}

function closed() {
  emits("update:modelValue", false);
}

function confirm() {
  appStore.setMainColor(mColor.value);
  closed();
}
</script>

<style lang="scss" scoped></style>
