<script setup>
import { capitalize } from '../utils/capitalize'

const categories = ['general', 'business', 'entertainment', 'health', 'sports', 'technology']
</script>

<template>
  <nav class="categories">
    <ul style="position: fixed">
      <router-link
          class="categories__category"
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
  margin-top: var(--top-bar-height);
  padding: 1rem 0;
  font-size: 1.35rem;
  color: var(--primary-font);
}

.categories__category {
  display: block;
  padding: 0.4rem 2rem;
  text-decoration: underline;
  color: var(--primary-font);
  cursor: pointer;
}

.categories__category:hover {
  color: var(--accent-color);
}

.categories__category:active {
  background-color: var(--accent-color);
  color: white;
}
</style>
