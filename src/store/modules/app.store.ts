/**
 * 应用全局变量，如侧边栏展开折叠等
 *
 */
import { defineStore } from "pinia";
import { AppStoreId } from "./constants";

const useAppStore = defineStore(AppStoreId, {
  state: () => ({
    isAsideMenuFolded: false,
  }),
  actions: {
    toggleAsideMenu() {
      this.isAsideMenuFolded = !this.isAsideMenuFolded;
    },
  },
});

export default useAppStore;
