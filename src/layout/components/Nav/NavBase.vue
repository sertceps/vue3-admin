<template>
  <nav class="nav-container">
    <NavHamburger />
    <NavBreadcrumb />
    <NavDropdown />
  </nav>
</template>

<script setup lang="ts">
import NavBreadcrumb from "./NavBreadcrumb.vue";
import NavDropdown from "./NavDropdown.vue";
import NavHamburger from "./NavHamburger.vue";
</script>

<style lang="scss" scoped>
.nav-container {
  display: flex;
  align-items: center;
  height: 60px;
  padding: 0 20px;
  background: #fff;
}
</style>
