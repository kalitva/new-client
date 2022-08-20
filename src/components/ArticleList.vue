<script>
import serviceByRoute from '../utils/serviceByRoute'
import ArticleItem from './ArticleItem.vue'

const PAGE_SIZE = 50;
//let page = 1;

export default {
  data() {
    return {
      articles: []
    }
  },
  mounted() {
    this.updateNews(this.$route)
  },
  watch: {
    $route(to) {
      this.updateNews(to)
    }
  },
  methods: {
    updateNews(route) {
      serviceByRoute(route)(PAGE_SIZE)
        .then(a => this.articles = a)
    }
  },
  components: { ArticleItem }
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

<style scoped>
.articles {
  width: var(--content-width);
  margin-top: var(--top-bar-height);
  padding: 1rem 2rem;
}
</style>
