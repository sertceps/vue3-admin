<template>
  <div class="container">
    {{ $t("i18n.basic.tooltip") }}
    <hr class="my-4" />
    <div class="demo-pagination-block">
      <el-pagination
        v-model:currentPage="currentPage"
        v-model:page-size="pageSize"
        :page-sizes="[100, 200, 300, 400]"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
      />
    </div>
    <div>
      {{ pageSize + " " + $t("i18n.basic.pageSizeText") }}
    </div>
    <div>
      {{ $t("i18n.basic.currentPageText") + " " + currentPage }}
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
const currentPage = ref(1);
const pageSize = ref(100);
// 如果要在这里使用，需要监听 appStore.language 变动，调用 i18n.t
</script>

<style lang="scss" scoped>
.container {
  padding: 100px;
  @include flex-c-center;
}

.demo-pagination-block + .demo-pagination-block {
  margin-top: 10px;
}
.demo-pagination-block {
  margin-bottom: 16px;
}
</style>
