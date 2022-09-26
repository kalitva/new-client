<script setup>
import { ref, onMounted } from 'vue'
import { useScrollEmmiter } from '../stores/scrollEmmiter'

const INNACURACY = 2
const SCROLL_TOP_BUTTON_TRESHOLD = 600
const HIGHLIGHT_HOLD_DELAY = 500

const scrollEmmiter = useScrollEmmiter()
const columnRef = ref()
const showScrollButton = ref(false)
const highlightScroll = ref(false)

const props = defineProps({
  id: { type: String, required: true },
  watchScrollToBottom: { type: Boolean, default: false }
})

onMounted(() => {
  scrollEmmiter.$onAction(({ name, args }) => {
    const [componentId] = args
    if (name === 'scrollToTop' && componentId === props.id) {
      scrollToTop()
    }
  })
})

function watchScrolling() {
  showScrollButton.value = columnRef.value.scrollTop > SCROLL_TOP_BUTTON_TRESHOLD
  highlightScroll.value = true;
  setTimeout(() => highlightScroll.value = false, HIGHLIGHT_HOLD_DELAY)
  if (!props.watchScrollToBottom) {
    return
  }
  const { offsetHeight, scrollTop, scrollHeight } = columnRef.value
  if ((offsetHeight + scrollTop) >= (scrollHeight - INNACURACY)) {
    scrollEmmiter.gotToBottom()
  }
}

function scrollToTop() {
  columnRef.value.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
</script>

<template>
  <div class="column">
    <div class="column__scroll-up">
      <div
          class="column__scroll-up__button"
          @click="scrollToTop"
          v-show="showScrollButton"
          :style="highlightScroll ? 'background-color: var(--secondary-color)' : ''"
      >
        <img src="src/assets/arrow-up.svg" />
      </div>
    </div>
    <div class="column__scrollable" @scroll="watchScrolling" ref="columnRef">
      <slot />
    </div>
  </div>
</template>

<style>
.column {
  display: flex;
  margin-top: var(--top-bar-height);
}

.column__scroll-up {
  min-width: 5rem;
}

.column__scroll-up__button {
  height: 100%;
  padding: 0 0.5rem;
  cursor: pointer;
  transition: all 0.5s;
}

.column__scroll-up__button:hover {
  background-color: var(--secondary-color);
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
