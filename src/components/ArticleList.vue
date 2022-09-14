<script setup>
import curryNewsService from '../provider/curryNewsService'
import ArticleItem from './ArticleItem.vue'
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const INNACURACY = 2
const PAGE_SIZE = 10

const $route = useRoute()

const articles = ref([])
const page = ref(1)

onMounted(() => {
  updateNews($route)
  window.onscroll = () => {
    const { innerHeight, pageYOffset } = window
    // if the page srolled to bottom
    if ((innerHeight + pageYOffset) >= (document.body.offsetHeight - INNACURACY)) {
      moreNews()
    }
  }
})
watch($route, updateNews)

function updateNews(route) {
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
