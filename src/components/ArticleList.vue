<script setup>
import ArticleItem from './ArticleItem.vue'
import { newsService } from '../config/services'
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useScrollEmmiter } from '../stores/scrollEmmiter'
import { useErrorDispatcher } from '../stores/errorDispatcher'
import { ComponentId } from '../config/components'

const $route = useRoute()
const scrollEmmiter = useScrollEmmiter()
const errorDispatcher = useErrorDispatcher()
const articles = ref([])
const limit = Math.min(20, newsService.maxLimit())
const offset = ref(1)

onMounted(() => {
  updateNews($route)
  scrollEmmiter.$onAction(({ name }) => {
    if (name === 'gotToBottom') {
      requestNews(++offset.value)
        .then(as => articles.value = articles.value.concat(as))
        .catch(riseError)
    }
  })
})
watch($route, updateNews)

function updateNews() {
  scrollEmmiter.scrollToTop(ComponentId.ARTICLE_LIST)
  requestNews(offset.value = 1)
    .then(as => articles.value = as)
    .catch(riseError)
}

function requestNews(offset) {
  if ($route.path === '/headlines') {
    return newsService.getByCategory($route.query.category, limit, offset)
  }
  if ($route.path === '/search') {
    return newsService.searchByQuery($route.query.q, limit, offset)
  }
  throw new Error('Should not be reached')
}

function riseError(error) {
  errorDispatcher.dispatch(error.message)
}
</script>

<template>
  <section class="articles">
    <ul>
      <li v-for="(article, index) in articles" :key="index">
        <article-item :article="article" />
      </li>
    </ul>
    <div class="articles__empty-set" v-if="!articles.length">Nothing found...</div>
  </section>
</template>

<style>
.articles {
  max-width: var(--content-width);
  padding: 1rem 2rem;
  padding-top: 2rem;
}

.articles__empty-set {
  text-align: center;
  font-size: 1.5rem;
  font-style: italic;
  color: var(--secondary-font);
}
</style>
