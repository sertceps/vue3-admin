import { createI18n } from "vue-i18n";
import { LanguageKey } from "@/store/constants";
import zh from "./lang/zh";
import en from "./lang/en";

const messages = {
  en,
  zh,
};

const i18n = createI18n({
  // 使用 composition API
  legacy: false,
  locale: localStorage.getItem(LanguageKey) || "zh",
  messages,
  // 全局使用 t 函数
  // If set to true, then properties and methods prefixed with $ are injected into Vue Component.
  //! 要显式设置
  globalInjection: true,
});
// TODO  https://github.com/intlify/vue-i18n-next/issues/789

export default i18n;
