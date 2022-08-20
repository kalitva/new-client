<script setup>
import serviceByRoute from '../utils/serviceByRoute'
import ArticleItem from './ArticleItem.vue'
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const PAGE_SIZE = 50;
const $route = useRoute()

const articles = ref([])
//let page = 1;

onMounted(() => updateNews($route))
watch($route, updateNews)

function updateNews(route) {
  serviceByRoute(route)(PAGE_SIZE)
    .then(a => articles.value = a)
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
