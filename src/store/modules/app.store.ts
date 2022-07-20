/**
 * 应用全局变量，如侧边栏展开折叠等
 *
 */
import { useLocalStorage } from "@vueuse/core";
import { defineStore } from "pinia";
import { AppStoreId, LanguageKey } from "../constants";

const useAppStore = defineStore(AppStoreId, {
  state: () => ({
    isAsideMenuFolded: false,
    // 国际化语言选项，使用 useLocalStorage，不再自己手动读写 localStorage
    // TODO useLocalStorage
    language: useLocalStorage<string>(LanguageKey, "zh"),
  }),
  actions: {
    /** 侧边菜单折叠展开 */
    toggleAsideMenu() {
      this.isAsideMenuFolded = !this.isAsideMenuFolded;
    },
    /** 设置语言 store */
    setLanguage(language: string) {
      this.language = language;
    },
  },
});

export default useAppStore;
