<template>
  <nav class="nav-container">
    <NavHamburger />
    <NavBreadcrumb />
    <NavAvatar />
    <LanguageSelect />
  </nav>
</template>

<script setup lang="ts">
import NavBreadcrumb from "./NavBreadcrumb.vue";
import NavAvatar from "./NavAvatar.vue";
import NavHamburger from "./NavHamburger.vue";
import LanguageSelect from "@/components/LanguageSelect/LanguageSelect.vue";
</script>

<style lang="scss" scoped>
.nav-container {
  display: flex;
  align-items: center;
  height: 60px;
  padding: 0 20px;
  padding-right: 30px;
  background: #fff;
}
</style>
