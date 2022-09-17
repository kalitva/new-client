<script setup>
import { ref, onMounted } from 'vue'
import { useScrollEmmiter } from '../stores/scrollEmmiter'

const INNACURACY = 2

const scrollEmmiter = useScrollEmmiter()
const columnRef = ref()

const props = defineProps({
  id: { type: String, required: true },
  watchScroll: { type: Boolean, default: false }
})

onMounted(() => {
  scrollEmmiter.$onAction(({ name, args }) => {
    if (name === 'scrollToTop' && args[0] === props.id) {
      columnRef.value.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  })
})

function emitIfGotToBottom() {
  if (!props.watchScroll) {
    return
  }
  const { offsetHeight, scrollTop, scrollHeight } = columnRef.value
  if ((offsetHeight + scrollTop) >= (scrollHeight - INNACURACY)) {
    scrollEmmiter.gotToBottom()
  }
}
</script>

<template>
  <div class="column">
    <div class="column__scrollable" @scroll="emitIfGotToBottom" ref="columnRef">
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
