/**
 * 批量注册 icons 下的svg
 * 要在 @/src/main.ts 中导入此文件
 */

const svgRequire = require.context(".", false, /\.svg$/);
svgRequire.keys().forEach((icon) => svgRequire(icon));
