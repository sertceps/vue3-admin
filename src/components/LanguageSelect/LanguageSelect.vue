<template>
  <!-- command	点击菜单项触发的事件回调	dropdown-item 的指令 -->
  <el-dropdown
    class="international"
    trigger="click"
    @command="handleSelectLanguage"
  >
    <!-- tooltip 需要有元素包裹，并且内部也要有元素 -->
    <div class="nav-icon-tooltip">
      <el-tooltip :content="$t('languageSelect.tooltip')" :effect="effect">
        <VIcon type="translate" :size="24" id="guide-i18n" />
      </el-tooltip>
    </div>

    <template #dropdown>
      <!-- command	派发到command回调函数的指令参数 -->
      <el-dropdown-item :disabled="language === 'zh'" command="zh"
        >中文</el-dropdown-item
      >
      <el-dropdown-item :disabled="language === 'en'" command="en"
        >English</el-dropdown-item
      >
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import VIcon from "@/components/VIcon/VIcon.vue";
import { useAppStore } from "@/store";
import { computed } from "@vue/reactivity";
import { useI18n } from "vue-i18n";
import { ElMessage } from "element-plus";

const appStore = useAppStore();

defineProps({
  effect: {
    type: String,
    default: "dark",
    // TODO validator
    validator: function (value: string) {
      return ["dark", "light"].indexOf(value) !== -1;
    },
  },
});

// 需要 computed
// TODO computed
const language = computed(() => appStore.language);

/** i18n 实例 */
const i18n = useI18n();
/** 语言切换处理函数 */
function handleSelectLanguage(language: string) {
  // 1. 切换 i18n locale 2. 修改 store 3. 提示
  i18n.locale.value = language;
  appStore.setLanguage(language);
  ElMessage.success(i18n.t("i18n.basic.languageSwitchedMessage"));
}
</script>

<style lang="scss" scoped></style>
