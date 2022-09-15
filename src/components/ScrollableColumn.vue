<template>
  <div class="column">
    <div class="column__scrollable">
      <slot />
    </div>
  </div>
</template>

<style>
.column {
  margin-top: var(--top-bar-height);
}

.column__scrollable {
  max-height: calc(100vh - var(--top-bar-height));
  overflow-y: auto;
  scrollbar-width: 0;
}

.column__scrollable::-webkit-scrollbar {
  display: none;
}
</style>
