/**
 * 验证是否为外部链接
 */
export function isExternal(url: string) {
  return /^(https?:|mailto:|tel:)/.test(url);
}
