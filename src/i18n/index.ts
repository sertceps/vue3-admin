import { createI18n } from "vue-i18n";

const messages = {
  en: {
    msg: {
      test: "hello world",
    },
  },
  zh: {
    msg: {
      test: "你好世界",
    },
  },
};

const locale = "zh";

const i18n = createI18n({
  // 使用 composition API
  legacy: false,
  locale,
  messages,
  // 全局使用 t 函数
  // If set to true, then properties and methods prefixed with $ are injected into Vue Component.
  //! 要显式设置
  globalInjection: true,
});
// TODO  https://github.com/intlify/vue-i18n-next/issues/789

export default i18n;
