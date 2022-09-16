<script setup>
import curryNewsService from '../provider/curryNewsService'
import ArticleItem from './ArticleItem.vue'
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useScrollEmmiter } from '../stores/scrollEmmiter'

const PAGE_SIZE = 10

const $route = useRoute()
const scrollEmmiter = useScrollEmmiter()
const articles = ref([])
const page = ref(1)

onMounted(() => {
  updateNews($route)
  scrollEmmiter.$onAction(moreNews)
})
watch($route, updateNews)

function updateNews(route) {
  // TODO
  window.scrollTo({ top: 0, behavior: 'smooth' })
  page.value = 1
  curryNewsService(route)(PAGE_SIZE)
    .then(a => articles.value = a)
}

function moreNews() {
  curryNewsService($route)(PAGE_SIZE, ++page.value)
    .then(as => articles.value = articles.value.concat(as))
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
