<script setup>
import LogoIcon from './icons/LogoIcon.vue'
</script>

<template>
  <header class="top-bar">
    <logo-icon/>
    <h2 class="top-bar__header"><a href="/">Top Headlines</a></h2>
    <div class="top-bar__middle">
      <input class="top-bar__middle__search" type="text" autofocus placeholder="Search for news..." />
    </div>
  </header>
</template>

<style scoped>
.top-bar {
  display: flex;
  align-items: center;
  height: 6rem;
  background-color: var(--primary-color);
}

.top-bar__header {
  font-size: 2rem;
  color: white;
}

.top-bar__header:hover {
  color: var(--secondary-color);
  transition: color 1s;
}

.top-bar__middle {
  display: flex;
  justify-content: flex-end;
  width: var(--content-width);
}

.top-bar__middle__search {
  width: 20rem;
  border: none;
  outline: none;
  border-radius: 0.5rem;
  padding: 0.5rem;
  font-family: serif;
  font-size: 1.5rem;
}

.top-bar__middle__search::placeholder {
  font-family: serif;
  font-style: italic;
  font-size: 1.8rem;
  color: gray;
}
</style>
