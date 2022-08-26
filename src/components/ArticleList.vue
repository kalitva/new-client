<script setup>
import serviceByRoute from '../utils/serviceByRoute'
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
    if ((innerHeight + pageYOffset) >= (document.body.offsetHeight - INNACURACY)) {
      moreNews()
    }
  }
})
watch($route, updateNews)

function updateNews(route) {
  page.value = 1
  serviceByRoute(route)(PAGE_SIZE)
    .then(a => articles.value = a)
}

function moreNews() {
  serviceByRoute($route)(PAGE_SIZE, ++page.value)
    .then(as => articles.value = articles.value.concat(as))
}
</script>

<template>
  <h1>{{ PAGE_SIZE }}</h1>
  <section class="articles">
    <ul>
      <li v-for="(article, index) in articles" :key="index">
        <article-item :article="article" />
      </li>
    </ul>
  </section>
</template>

<style scoped>
.articles {
  width: var(--content-width);
  margin-top: var(--top-bar-height);
  padding: 1rem 2rem;
}
</style>
