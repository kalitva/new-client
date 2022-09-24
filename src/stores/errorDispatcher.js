import { defineStore } from 'pinia'

export const useErrorDispatcher = defineStore('error-dispatcher', {
  state: () => ({ messages: [] }),
  actions: {
    dispatch(message) {
      this.messages.push(message)
    },
    clear() {
      this.messages = []
    }
  }
})
