<script setup>
import capitalize from '../utils/capitalize'

const categories = ['general', 'business', 'entertainment', 'health', 'sports', 'technology']
</script>

<template>
  <nav class="categories">
    <ul style="position: fixed">
      <router-link
          class="categories__item"
          v-for="category in categories"
          :key="category"
          :to="{ path: '/headlines', query: { category }}"
      >
        {{ capitalize(category) }}
      </router-link>
    </ul>
  </nav>
</template>

<style scoped>
.categories {
  padding: 1rem 0;
  font-size: 1.35rem;
  color: var(--primary-font);
}

.categories__item {
  display: block;
  padding: 0.4rem 2rem;
  color: var(--primary-font);
  cursor: pointer;
}

.categories__item:hover {
  color: var(--accent-color);
}

.categories__item:active {
  background-color: var(--accent-color);
  color: white;
}
</style>
