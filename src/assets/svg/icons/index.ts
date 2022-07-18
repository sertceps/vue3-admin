/**
 * 批量注册 icons 下的svg
 * 要在 @/src/main.ts 中导入此文件
 */
// TODO 替换字节 SVG 文件
// TODO 字节 color 不起作用，差异在哪里？
const svgRequire = require.context(".", false, /\.svg$/);
svgRequire.keys().forEach((icon) => svgRequire(icon));
