import { defineStore } from 'pinia'

export const useScrollEmmiter = defineStore('scroll-emmiter', () => {
  function scrollToTop(id) {}
  function gotToBottom() {}
  return { scrollToTop, gotToBottom }
})
