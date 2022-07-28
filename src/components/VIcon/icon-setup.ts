// 不想全局导入，因此使用到的图标从这里导入，再进行注册
import { Icon } from "@icon-park/vue-next/lib/runtime/index";
import { Home, MenuFoldOne, Calendar, Translate, Theme } from "@icon-park/vue-next";

/** 定义图标字典 */
export default <{ [key: string]: Icon }>{
  Home,
  MenuFoldOne,
  Calendar,
  Translate,
  Theme,
};
