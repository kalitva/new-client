<script setup>
import capitalize from '../utils/capitalize'

const categories = ['general', 'business', 'entertainment', 'health', 'sports', 'technology']
</script>

<template>
  <nav>
    <ul style="position: fixed">
      <router-link
          class="category"
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
.category {
  display: block;
  padding: 0.4rem 2rem;
  text-decoration: underline;
  color: var(--primary-font);
  cursor: pointer;
}

.category:hover {
  color: var(--accent-color);
}

.category:active {
  background-color: var(--accent-color);
  color: white;
}
</style>
