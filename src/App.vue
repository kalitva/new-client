<script setup>
import TopBar from '../src/components/TopBar.vue'
import CategoriesMenu from '../src/components/CategoriesMenu.vue'
import ExchangeRate from '../src/components/ExchangeRate.vue'
</script>

<template>
  <top-bar />
  <div class="content">
    <categories-menu class="column" />
    <router-view class="column" />
    <exchange-rate class="column" />
  </div>
</template>

<style scoped>
.content {
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
}
.column {
  margin-top: var(--top-bar-height);
}
</style>
