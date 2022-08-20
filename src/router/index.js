import { createRouter, createWebHistory } from 'vue-router'
import ArticleList from '../components/ArticleList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/headlines?category=general'
    },
    {
      path: '/everything',
      component: ArticleList
    },
    {
      path: '/headlines',
      component: ArticleList
    }
  ]
})

export default router
