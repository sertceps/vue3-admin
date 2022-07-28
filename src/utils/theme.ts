/**
 * rgb-hex 转换 rgb(a) 颜色为十六进制 （一年前更新）
 * css-color-function 颜色解析和转换  （五年前更新）
 * formula.json 颜色转化计算器
 */
import { formula } from "@/components/ThemeSelect/formula";

/**
 * 写入 style
 */
// export function writeNewStyle(newStyle: string) {}

/**
 * 根据主题色，生成最新样式表
 */
// export function generateNewStyle(primaryColor: string) {
// 1. 根据主色生成值表
// 2. 获取当前 element-plus 默认样式表，将需要替换的色值打上标记
// 3. 遍历生成的色值表，在默认样式表进行全局替换
// }

export function generateColors(primary: string) {
  if (!primary) return;
  const colors: { [key: string]: string } = {
    primary,
  };

  Object.keys(formula).forEach((key: string) => {
    const value = formula[key].replace(/primary/g, primary);
    // TODO 转换
    //! 先到这里
    // console.log(value);
    colors[key] = "#" + value;
  });

  return colors;
}
