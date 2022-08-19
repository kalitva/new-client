<script setup>
import LogoIcon from './icons/LogoIcon.vue'
</script>

<template>
  <header class="top-bar">
    <logo-icon/>
    <h2 class="top-bar__header">Top Headlines</h2>
    <div class="top-bar__content">
      <input class="top-bar__content__search" type="text" autofocus placeholder="Search for news..." />
    </div>
  </header>
</template>

<style scoped>
.top-bar {
  display: flex;
  align-items: center;
  height: 7rem;
  background-color: var(--primary-color);
}

.top-bar__header {
  font-size: 2rem;
  color: var(--secondary-color);
}

.top-bar__content {
  display: flex;
  justify-content: flex-end;
  width: var(--content-width);
}

.top-bar__content__search {
  width: 20rem;
  border: none;
  outline: none;
  border-radius: 0.5rem;
  padding: 0.5rem;
  font-family: serif;
  font-size: 2rem;
}

.top-bar__content__search::placeholder {
  font-family: serif;
  font-style: italic;
  font-size: 1.8rem;
}
</style>
