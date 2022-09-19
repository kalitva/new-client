<script setup>
import curryNewsService from '../utils/curryNewsService'
import ArticleItem from './ArticleItem.vue'
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useScrollEmmiter } from '../stores/scrollEmmiter'
import { ComponentId } from '../config/components'

const PAGE_SIZE = 10

const $route = useRoute()
const scrollEmmiter = useScrollEmmiter()
const articles = ref([])
const page = ref(1)

onMounted(() => {
  updateNews($route)
  scrollEmmiter.$onAction(({ name }) => {
    if (name === 'gotToBottom') {
      curryNewsService($route)(PAGE_SIZE, ++page.value)
        .then(as => articles.value = articles.value.concat(as))
    }
  })
})
watch($route, updateNews)

function updateNews(route) {
  scrollEmmiter.scrollToTop(ComponentId.ARTICLE_LIST)
  page.value = 1
  curryNewsService(route)(PAGE_SIZE)
    .then(as => articles.value = as)
}
</script>

<template>
  <section class="articles">
    <ul>
      <li v-for="(article, index) in articles" :key="index">
        <article-item :article="article" />
      </li>
    </ul>
  </section>
</template>

<style>
.articles {
  max-width: var(--content-width);
  padding: 1rem 2rem;
  padding-top: 2rem;
  margin-left: auto;
  margin-right: auto;
}
</style>
