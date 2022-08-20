<script>
export default {
  props: {
    article: {
      type: Object,
      requred: true
    }
  },
  methods: {
    formatDate(date) {
      return Intl.DateTimeFormat('default', { dateStyle: 'long' }).format(new Date(date))
    }
  }
}
</script>

<template>
  <article class="article">
    <h3 class="article__header">{{ article.title }}</h3>
    <div class="article__content">
      <img class="article__content__image" :src="article.urlToImage" />
      <div>
        <p class="article__content__description">{{ article.description }}</p>
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
  margin-top: 3rem;
  border-radius: 1rem;
  width: 100%;
}

.article__header {
  padding: 1rem 2rem;
  border-radius: 1rem 1rem 0 0;
  font-size: 1.5rem;
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
  font-size: 1.6rem;
  color: var(--primary-font);
}

.article__content__caption {
  padding-right: 2rem;
  margin-top: 1rem;
  font-size: 1.4rem;
  text-align: right;
  color: var(--secondary-font);
}

.article__link {
  padding: 0 1rem;
  font-size: 1.5rem;
  text-align: right;
  color: var(--accent-color);
}
</style>
