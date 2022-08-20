<script setup>

</script>

<template>
  <nav class="categories">
    <ul>
      <router-link class="categories__item" :to="{ path: '/headlines', query: { category: 'business' }}">
        <strong>Business</strong>
      </router-link>
      <router-link class="categories__item" :to="{ path: '/headlines', query: { category: 'entertainment' }}">
        <strong>Entertainment</strong>
      </router-link>
      <router-link class="categories__item" :to="{ path: '/headlines', query: { category: 'general' }}">
        <strong>General</strong>
      </router-link>
      <router-link class="categories__item" :to="{ path: '/headlines', query: { category: 'health' }}">
        <strong>Health</strong>
      </router-link>
      <router-link class="categories__item" :to="{ path: '/headlines', query: { category: 'sports' }}">
        <strong>Sports</strong>
      </router-link>
      <router-link class="categories__item" :to="{ path: '/headlines', query: { category: 'technology' }}">
        <strong>Technology</strong>
      </router-link>
    </ul>
  </nav>
</template>

<style scoped>
.categories {
  max-width: 30rem;
  padding: 1rem 0;
  border-right: 1px sorouter-linkd var(--primary-color);
  font-size: 1.5rem;
  color: var(--primary-font);
}

.categories__item {
  display: block;
  padding: 0.5rem 2rem;
  color: var(--primary-font);
  cursor: pointer;
}

.categories__item:hover {
  background-color: var(--secondary-color);
}

.categories__item:visited {
  color: inherit;
}

.categories__item:active {
  background-color: var(--accent-color);
  color: white;
  transition: all 0.2s;
}
</style>
