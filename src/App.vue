<script setup>
import TopBar from '../src/components/TopBar.vue'
import CategoriesMenu from '../src/components/CategoriesMenu.vue'
import ExchangeRate from '../src/components/ExchangeRate.vue'
</script>

<template>
  <top-bar />
  <div class="content">
    <categories-menu />
    <router-view />
    <exchange-rate/>
  </div>
</template>

<style scoped>
.content {
  display: flex;
  justify-content: space-between;
}
</style>
