<script setup>
import TopBar from '../src/components/TopBar.vue'
import CategoriesMenu from '../src/components/CategoriesMenu.vue'
import ExchangeRate from '../src/components/ExchangeRate.vue'
import SideBarFeed from '../src/components/SideBarFeed.vue'
import ScrollableColumn from '../src/components/ScrollableColumn.vue'
</script>

<template>
  <top-bar />
  <div class="content">
    <categories-menu />
    <scrollable-column :watchScroll="true">
      <router-view />
    </scrollable-column>
    <scrollable-column>
      <exchange-rate />
      <side-bar-feed />
    </scrollable-column>
  </div>
</template>

<style scoped>
.content {
  display: grid;
  grid-template-columns: 0.5fr 4fr 1.5fr;
  max-width: 150rem;
  margin: 0 auto;
}
</style>
