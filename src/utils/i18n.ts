import i18n from "@/i18n";

/** 生成 title */
export function generateI18nTitle(title: string | undefined) {
  return i18n.global.t("route." + title);
}
