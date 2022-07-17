// TODO declare vue-router meta
import "vue-router";

declare module "vue-router" {
  interface RouteMeta {
    title?: string;
    icon?: string;
    // 是否在菜单栏中隐藏
    hidden?: boolean;
    // 是否在新标签展示
    newTabShow?: boolean;
    // 是否总是展示父级菜单
    alwaysShow?: boolean;
  }
}
