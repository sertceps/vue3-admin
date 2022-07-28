import i18n from "@/i18n";
import { useAppStore } from "@/store";
import { watch } from "vue";

/** 生成 title */
export function generateI18nTitle(title: string | undefined) {
  if (!title) return "";
  return i18n.global.t("route." + title);
}

/** 监听语言变化 */
export function watchSwitchLanguage(...callbackList: Array<(...params: unknown[]) => unknown>) {
  const appStore = useAppStore();
  watch(
    () => appStore.language,
    () => callbackList.forEach((callback) => callback(appStore.language))
  );
}
