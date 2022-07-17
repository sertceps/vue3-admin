// /**
//  * route 相关 utils 函数
//  */
// import { getRoutes } from "@/router";
// import { RouteRecordRaw } from "vue-router";
// import path from "path-browserify";

// /**
//  * 获取所有子路由
//  * @param routeList 路由列表
//  * @returns 子路由列表
//  */
// // function getChildRoutes(routeList: RouteRecordRaw[]) {
// //   const routes: RouteRecordRaw[] = [];
// //   routeList.forEach((route) => {
// //     if (route.children && route.children.length > 0) {
// //       routes.push(...route.children);
// //     }
// //   });

// //   return routes;
// // }

// /**
//  * 剔除所有路由中的（展平后的）子路由
//  */
// // export function filterRoutes(routeList: RouteRecordRaw[]) {
// // const childRoutes = getChildRoutes(routeList);
// //! 这种写法不行，因为子路由书写时通常不会带父路，而 getRoutes() 拿到的都是带父路由作为前缀的
// //? 1. 使用完全写法
// //? 2. meta 中带上路由层级信息
// //   return routeList.filter((route) => !childRoutes.find((childRoute) => childRoute.path === route.path));
// // }

// export function filterRoutes() {
//   const routes = getRoutes();
// }

// /**
//  * 判断是否为空
//  */
// function isNull(data: unknown) {
//   if (!data) return true;
//   if (JSON.stringify(data) === "{}" || JSON.stringify(data) === "[]") return true;
// }

// /**
//  * 生成侧边菜单选项
//  */
// export function generateMenus(routeList: RouteRecordRaw[]) {
//   const result: RouteRecordRaw[] = [];

//   routeList.forEach((route) => {
//     // 1. 不存在 meta 及 children，直接 return
//     if (isNull(route.meta) && isNull(route.children)) return;
//     // 2. 存在 meta，不存在 children
//     if (!isNull(route.meta) && isNull(route.children)) {
//       if (route.meta?.title && route.meta.icon) {
//         result.push(route);
//       }
//     }

//     // 2. 不存在 meta 存在 children，递归
//     // 因为最终的 menu item 需要进行跳转，此时需要合并 Path
//     if (isNull(route.meta) && !isNull(route.children)) {
//       route.children?.forEach((item) => (item.path = path.resolve(route.path, item.path)));
//       result.push(...generateMenus(route.children as RouteRecordRaw[]));
//     }
//     // 4. 存在 meta，存在 children
//     if (!isNull(route.meta) && !isNull(route.children)) {
//     }
//   });

//   return result;
// }

// const testRoute: RouteRecordRaw[] = [
// 1. 无 meta 及 children，不需要
// 2. 有 meta 无 children，判断是否有 icon 和 title，有则 push
// 3. 无 meta，有 children，
//   1. 对 children 进行路径拼接
//   2. 对 children 重复上述判断（递归）
// 4. 有 meta，有 children
//  1. 判断是否有 icon 和 title，有则 push
//  2. 对 children 进行判断，但是 children 要在 父里面？？
// ];
