import { createRouter, createWebHistory } from 'vue-router'
import ArticleList from '../components/ArticleList.vue'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/headlines?category=business'
    },
    {
      path: '/search',
      component: ArticleList
    },
    {
      path: '/headlines',
      component: ArticleList
    }
  ]
})
