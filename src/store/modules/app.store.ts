/**
 * 应用全局变量，如侧边栏展开折叠等
 *
 */
import { useLocalStorage } from "@vueuse/core";
import { defineStore } from "pinia";
import { AppStoreId, LanguageKey, MainColorKey, TagsViewKey } from "../constants";
import { TagsViewRouteRecord } from "@/models/app";

const useAppStore = defineStore(AppStoreId, {
  state: () => ({
    isAsideMenuFolded: false,
    // 国际化语言选项，使用 useLocalStorage，不再自己手动读写 localStorage
    // TODO useLocalStorage
    language: useLocalStorage<string>(LanguageKey, "zh"),
    // 主题色
    mainColor: useLocalStorage<string>(MainColorKey, "#00ff00"),
    // tagsView 列表
    tagViewList: useLocalStorage<Array<TagsViewRouteRecord>>(TagsViewKey, []),
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
    /** 设置主题色 */
    setMainColor(mainColor: string) {
      this.mainColor = mainColor;
    },
    /** 添加 tags */
    addTagsViewList(tag: TagsViewRouteRecord) {
      // 处理重复
      const isFind = this.tagViewList.find((item) => item.path === tag.path);
      if (isFind) return;
      this.tagViewList.push(tag);
    },
    /** 修改 tags title 语言 */
    changeTagsView(index: number, tag: TagsViewRouteRecord) {
      this.tagViewList[index] = tag;
    },
    /** 删除 tags */
    removeTagsView(type: "other" | "right" | "index", index: number) {
      if (type === "index") return this.tagViewList.splice(index, 1);
      if (type === "right") return this.tagViewList.splice(index + 1, this.tagViewList.length - index + 1);
      if (type === "other") {
        this.tagViewList.splice(index + 1, this.tagViewList.length - index + 1);
        this.tagViewList.splice(0, index);
      }
    },
  },
});

export default useAppStore;
