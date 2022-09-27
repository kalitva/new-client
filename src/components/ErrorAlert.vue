<script setup>
import { useErrorDispatcher } from '../stores/errorDispatcher'
import { ref, onMounted } from 'vue'

const errorDispatcher = useErrorDispatcher()
const showError = ref(false)
const messages = ref([])

onMounted(() => {
  errorDispatcher.$onAction(({ name, store }) => {
    if (name === 'dispatch') {
      messages.value = store.messages
      showError.value = true
    }
  })
})

function close() {
  showError.value = false
  errorDispatcher.clear()
}
</script>

<template>
  <div class="error" v-if="showError">
    <div class="error__dialog">
      <div>
        <span class="error__dialog__close" @click="close">X</span>
      </div>
      <ul>
        <li
            class="error__dialog__message"
            v-for="(message, index) in messages"
            :key="index"
        >
          <strong>Error: </strong>{{ message }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style>
.error {
  position: absolute;
  width: 100%;
  top: 2rem;
}

.error__dialog {
  max-width: 30rem;
  margin: 0 auto;
  padding: 0.3rem;
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  color: red;
  background-color: var(--secondary-color);
}

.error__dialog__close {
  display: inline-block;
  float: right;
  padding: 0.5rem;
  color: var(--primary-font);
  font-family: sans-serif;
  font-weight: bold;
  font-size: 1.5rem;
  cursor: pointer;
}

.error__dialog__message {
  padding: 1rem;
  font-size: 1.3rem;
  text-align: center;
  color: red;
}
</style>
