<template>
  <template v-if="!alwaysShow && theOnlyOneChild && !theOnlyOneChild.children">
    <AsideItemLink
      v-if="theOnlyOneChild.meta"
      :to="resolvePath(theOnlyOneChild)"
    >
      <el-menu-item :index="resolvePath(theOnlyOneChild)">
        <SIcon
          v-if="theOnlyOneChild.meta?.icon"
          :icon="theOnlyOneChild.meta.icon"
          class-name="aside-item-icon"
        />
        <template #title>
          <span>{{ theOnlyOneChild.meta?.title }}</span>
        </template>
      </el-menu-item>
    </AsideItemLink>
  </template>

  <el-sub-menu v-else :index="resolvePath(item)">
    <template #title>
      <SIcon
        v-if="item.meta?.icon"
        :icon="item.meta.icon"
        class-name="aside-item-icon"
      />
      <span>{{ item.meta?.title }}</span>
    </template>
    <AsideItem
      v-for="child in item.children"
      :key="child.path"
      :item="child"
      :base-path="resolvePath(child)"
    />
  </el-sub-menu>
</template>

<script setup lang="ts">
import path from "path-browserify";
import { PropType } from "vue";
import { RouteRecordRaw } from "vue-router";
import SIcon from "@/components/SIcon/SIcon.vue";
import { computed } from "@vue/reactivity";
import { isExternal } from "@/utils/validate";
import AsideItemLink from "./AsideItemLink.vue";

// 定义 prop
const props = defineProps({
  item: {
    type: Object as PropType<RouteRecordRaw>,
    required: true,
  },
  basePath: {
    type: String,
    required: true,
  },
});
/**
 * 判断是否展示根菜单
 */
const alwaysShow = computed(() => {
  if (props.item.meta && props.item.meta.alwaysShow) return true;
  return false;
});

/**
 * 返回需要展示的 child 数量
 */
const showingChildNumber = computed(() => {
  if (props.item.children) {
    return props.item.children.filter((item) => {
      if (item.meta && item.meta.hidden) return false;
      return true;
    }).length;
  }

  return 0;
});

/** 判断是否为唯一 child */
const theOnlyOneChild = computed(() => {
  // child 数量 > 1
  if (showingChildNumber.value > 1) return null;
  // child 数量是 1
  if (props.item.children) {
    for (const child of props.item.children) {
      // const child = props.item.children[0];
      // 如果 child 没有 meta，或者有 meta 但是并非隐藏
      if (!child.meta || !child.meta.hidden) return child;
    }
  }
  // child 数量是 0
  return { ...props.item, path: "" };
});

const resolvePath = (route: RouteRecordRaw) => {
  if (isExternal(route.path)) return route.path;
  if (route.meta?.newTabShow) {
    return location.origin + props.basePath + route.path;
  }
  if (isExternal(props.basePath)) return props.basePath;

  return path.resolve(props.basePath, route.path);
};
</script>

<style lang="scss" scoped>
.aside-item-icon {
  margin-right: 10px;
  // svg currentColor
  color: #fff;
}
.is-active {
  .aside-item-icon {
    color: #409eff;
  }
}

.el-menu--collapse {
  .el-sub-menu {
    :deep(.el-sub-menu__title) {
      padding: 0;
      display: flex;
      justify-content: center;
      .el-sub-menu__icon-arrow {
        display: none;
      }
      // 菜单标题文字
      span {
        height: 0;
        width: 0;
        overflow: hidden;
        visibility: hidden;
        display: inline-block;
      }
    }
  }

  .el-menu-item {
    :deep(.el-menu-tooltip__trigger) {
      padding: 0;
      display: flex;
      justify-content: center;
    }
  }
}
</style>
