<script setup>
import { useRoute } from 'vue-router'

defineProps({
  article: { type: Object, requred: true }
})

function formatDate(date) {
  return Intl.DateTimeFormat('default', { dateStyle: 'long' }).format(new Date(date))
}

function highlightQuery(description) {
  const query = useRoute().query.q
  if (!query) {
    return description
  }
  const replacement = `<span class="article__highlight">${query}</span>`
  return description.replaceAll(query, replacement)
}
</script>

<template>
  <article class="article">
    <h3 class="article__header">
      <a :href="article.url" target="_blank">{{ article.title }}</a>
    </h3>
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
    <div class="article__separator">* * *</div>
  </article>
</template>

<style>
.article {
  border-radius: 1rem;
  width: 100%;
}

.article__header {
  border-bottom: 1px solid var(--primary-font);
  font-size: 2.5rem;
  line-height: 3.5rem;
  text-align: center;
  color: var(--primary-font);
}

.article__content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  box-sizing: border-box;
  padding: 1.5rem 2rem;
}

.article__content__image {
  max-width: 100%;
}

.article__content__description {
  padding: 1rem 2rem;
  font-size: 1.35rem;
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

.article__separator {
  margin: 4rem;
  text-align: center;
  font-size: 2rem;
}

.article__highlight {
  background-color: yellow;
}
</style>
