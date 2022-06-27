/** 烤串转大驼峰 */
export function kebab2Camel(words: string) {
  if (!words) return "";

  return words
    .split("-")
    .map((word) => word.replace(word[0], word[0].toUpperCase()))
    .join("");
}
