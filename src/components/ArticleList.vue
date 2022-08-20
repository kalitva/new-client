<script>
import serviceByRoute from '../utils/serviceByRoute'

const PAGE_SIZE = 50;
let page = 1;

export default {
  data() {
    return {
      articles: [],
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
      serviceByRoute(route)(PAGE_SIZE, page)
        .then(a => this.articles = a)
    }
  }
}
</script>

<template>
  <section>
    <h1>Hello world</h1>
    <h2>{{ $route.query.category }}</h2>
    <pre>
      {{ articles }}
    </pre>
  </section>
</template>
