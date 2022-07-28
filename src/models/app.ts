/**
 * app 类型
 */
import { LocationQuery, RouteMeta, RouteParams, RouteRecordName } from "vue-router";

/** tags view list 项目类型 */
export interface TagsViewRouteRecord {
  name: RouteRecordName | undefined | null;
  meta: RouteMeta;
  fullPath: string;
  params: RouteParams;
  path: string;
  query: LocationQuery;
  title: string;
}
