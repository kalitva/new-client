<script setup>
import { onMounted, ref } from 'vue'
import newsService from '../services/newsService'

const articles = ref([])

onMounted(async () => {
  articles.value = await newsService.search({
    language: 'en',
    q: 'ukraine',
    pageSize: 50,
    page: 1
  })
})
</script>

<template>
  <aside class="side">
    <h2 class="side__header">The important</h2>
    <ul>
      <li class="side__article" v-for="(article, index) in articles" :key="index">
        <h3 class="side__article__header">
          <a :href="article.url">{{ article.title }}</a>
        </h3>
        <img class="side__article__image" :src="article.urlToImage" />
        <p class="side__article__description">{{ article.description }}</p>
      </li>
    </ul>
  </aside>
</template>

<style>
.side {
  margin-top: 10rem;
  padding: 0 1rem;
}

.side__header {
  font-size: 1.7rem;
  text-align: center;
  margin: 3rem 0;
}

.side__article {
  margin-bottom: 5rem;
}

.side__article__header {
  padding: 1rem;
  border-radius: 1rem 1rem 0 0;
  font-size: 1.4rem;
  text-decoration: underline;
  background-color: var(--secondary-color);
}

.side__article__image {
  width: 40%;
  padding: 1rem 0.5rem;
  float: right;
}

.side__article__description {
  font-size: 1.2rem;
  font-style: italic;
  padding: 2rem 1rem;
  color: var(--secondary-font);
}

</style>
