/**
 * 用于 tags view
 */

const whiteList = ["/", "/login", "/403", "/404", "/500"];

/** 判断是否需要保存到 tags view list */
export function isTags(path: string) {
  return !whiteList.includes(path);
}
