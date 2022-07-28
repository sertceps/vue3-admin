<template>
  <div class="tags-view-container">
    <router-link
      v-for="(tag, index) in appStore.tagViewList"
      :key="tag.fullPath"
      class="tags-view-item"
      :class="isActive(tag) ? 'active' : ''"
      :to="{ path: tag.fullPath }"
      @contextmenu.prevent="openContextMenu($event, index)"
    >
      {{ tag.title }}
      <VIcon
        class="icon-close"
        :size="16"
        v-show="!isActive(tag)"
        type="close-small"
        @click.prevent.stop="onCloseClick(index)"
      />
    </router-link>
    <TagsViewContextMenu
      v-show="isContextMenuVisible"
      :index="selectIndex"
      :style="menuStyle"
    />
  </div>
</template>

<script setup lang="ts">
import { useAppStore } from "@/store";
import { TagsViewRouteRecord } from "@/models/app";
import { useRoute } from "vue-router";
import VIcon from "@/components/VIcon/VIcon.vue";
import { reactive, ref, watch } from "vue";
import TagsViewContextMenu from "./TagsViewContextMenu.vue";

const appStore = useAppStore();
const route = useRoute();

/** 是否被选中 */
function isActive(tag: TagsViewRouteRecord) {
  return tag.path === route.path;
}

/** 关闭 tags view */
function onCloseClick(index: number) {
  appStore.removeTagsView("index", index);
}

/** 菜单是否展示 */
const isContextMenuVisible = ref(false);
/** 菜单样式 */
const menuStyle = reactive({
  left: "0px",
  top: "0px",
});
/** index */
const selectIndex = ref(0);
/** 打开 contextMenu */
// TODO 传递参数
function openContextMenu(event: PointerEvent, index: number) {
  // TODO 坐标计算
  const { x, y } = event;
  menuStyle.left = x + "px";
  menuStyle.top = y + "px";
  selectIndex.value = index;
  isContextMenuVisible.value = true;
}

function closeMenu() {
  isContextMenuVisible.value = false;
}
/** 监听 contextMenu visible，添加事件到 document.body */
watch(isContextMenuVisible, () => {
  if (isContextMenuVisible.value) {
    document.body.addEventListener("click", closeMenu);
  } else {
    document.body.removeEventListener("click", closeMenu);
  }
});
</script>

<style lang="scss" scoped>
.tags-view-container {
  // position: relative;
  background: #fff;
  .tags-view-item {
    display: inline-block;
    box-sizing: border-box;
    cursor: pointer;
    height: 26px;
    line-height: 26px;
    border: 1px solid #d8dce5;
    color: #495060;
    padding: 0 8px;
    font-size: 12px;
    margin-bottom: 5px;
    margin-left: 5px;
    &:first-of-type {
      margin-left: 15px;
    }
    &:last-of-type {
      margin-right: 15px;
    }
    &.active {
      background: #409eff;
      color: #fff;
      // 小圆点
      &::before {
        content: "";
        background: #fff;
        display: inline-block;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        position: relative;
        margin-right: 4px;
      }
    }
    // close 按钮
    .icon-close {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      // line-height: 10px;
      // vertical-align: 2px;
      // text-align: center;
      transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      transform-origin: 100% 50%;
      &::before {
        transform: scale(0.6);
        display: inline-block;
        vertical-align: -3px;
      }
      &:hover {
        background-color: #b4bccc;
        color: #fff;
      }
    }
  }
}
</style>
