<script setup>
import { useRoute } from 'vue-router'

defineProps({
  article: { type: Object, requred: true }
})

function formatDate(date) {
  return Intl.DateTimeFormat('default', { dateStyle: 'long' }).format(new Date(date))
}

function highlightQuery(description) {
  const query = useRoute().query.search
  if (!query) {
    return description
  }
  const replacement = `<span class="article__highlight">${query}</span>`
  return description.replaceAll(query, replacement)
}
</script>

<template>
  <article class="article">
    <h3 class="article__header" v-html="highlightQuery(article.title)" />
    <div class="article__content">
      <img class="article__content__image" :src="article.urlToImage" />
      <div>
        <p class="article__content__description" v-html="highlightQuery(article.description)" />
        <div class="article__content__caption">
          <div>
            <span>source: </span>
            <strong>{{ article.source.name }}</strong>
          </div>
          <div><em>{{ formatDate(article.publishedAt) }}</em></div>
        </div>
      </div>
    </div>
    <div class="article__link">
      <a target="_blank" :href="article.url">Read more...</a>
    </div>
  </article>
</template>

<style scoped>
.article {
  margin-bottom: 5rem;
  border-radius: 1rem;
  width: 100%;
}

.article__header {
  padding: 1.3rem 2rem;
  border-radius: 1rem 1rem 0 0;
  font-size: 1.3rem;
  text-align: center;
  background-color: var(--secondary-color);
}

.article__content {
  display: flex;
  justify-content: space-between;
}

.article__content__image {
  max-width: 50%;
}

.article__content__description {
  padding: 1rem 2rem;
  font-size: 1.3rem;
  color: var(--primary-font);
}

.article__content__caption {
  padding-right: 2rem;
  margin-top: 1rem;
  font-size: 1.3rem;
  text-align: right;
  color: var(--secondary-font);
}

.article__link {
  padding: 0 1rem;
  font-size: 1.4rem;
  text-align: right;
  color: var(--accent-color);
}
</style>

<style>
.article__highlight {
  background-color: yellow;
}
</style>
