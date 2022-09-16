<script setup>
import { useScrollEmmiter } from '../stores/scrollEmmiter.js'

const INNACURACY = 2

const scrollEmmiter = useScrollEmmiter()

const props = defineProps({
  watchScroll: { type: Boolean, default: false }
})

function emitIfGotToBottom(event) {
  if (!props.watchScroll) {
    return
  }
  const { offsetHeight, scrollTop, scrollHeight } = event.target
  if ((offsetHeight + scrollTop) >= (scrollHeight - INNACURACY)) {
    scrollEmmiter.gotToBottom()
  }
}
</script>

<template>
  <div class="column">
    <div class="column__scrollable" @scroll="emitIfGotToBottom">
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
