import { defineStore } from 'pinia'

export const useScrollEmmiter = defineStore('scrollEmmiter', () => {
  function gotToBottom() {}
  return { gotToBottom }
})
