<script setup>
import LogoIcon from './icons/LogoIcon.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const $router = useRouter()

const searchField = ref()

function searchNews() {
  $router.push({
    path: 'search',
    query: { q: searchField.value.value }
  })
  searchField.value.value = ''
}
</script>

<template>
  <header class="top-bar">
    <logo-icon/>
    <h2 class="top-bar__header">Top Headlines</h2>
    <div class="top-bar__middle">
      <input
          class="top-bar__middle__search"
          type="text"
          autofocus
          placeholder="Search for news..."
          ref="searchField"
          @keydown.enter="searchNews"
      />
    </div>
  </header>
</template>

<style>
.top-bar {
  position: fixed;
  display: flex;
  align-items: center;
  width: 100%;
  height: var(--top-bar-height);
  background-color: var(--primary-color);
}

.top-bar__header {
  font-size: 1.7rem;
  color: white;
}

.top-bar__middle {
  display: flex;
  justify-content: flex-end;
  width: var(--content-width);
  margin: 0 auto;
}

.top-bar__middle__search {
  width: 20rem;
  border: none;
  outline: none;
  border-radius: 0.5rem;
  padding: 0.5rem;
  font-family: serif;
  font-size: 1.8rem;
}

.top-bar__middle__search::placeholder {
  font-family: serif;
  font-style: italic;
  font-size: 1.6rem;
  color: gray;
}
</style>
