<script setup>
import TopBar from '../src/components/TopBar.vue'
import CategoriesMenu from '../src/components/CategoriesMenu.vue'
import ExchangeRate from '../src/components/ExchangeRate.vue'
</script>

<template>
  <top-bar />
  <div class="content">
    <nav class="content__categories ">
      <categories-menu class="column" />
    </nav>
    <router-view class="column" />
    <exchange-rate class="column" />
  </div>
</template>

<style scoped>
.content {
  display: grid;
  grid-template-columns: 1fr 4fr 1.5fr;
}

.content__categories {
  padding: 1rem 0;
  font-size: 1.35rem;
  color: var(--primary-font);
}

.column {
  margin-top: var(--top-bar-height);
}
</style>
