<script>
import newsService from '../services/NewsService.js'
import articles from '../stub.json'
export default {
  data() {
    return {
      msg: ''
    }
  },
  mounted() {
    //   newsService.search({ q: 'war', pageSize: 10, page: 1 })
    // .then(json => this.msg = json)
    this.msg = articles
  }
}
</script>

<template>
  <pre>
    {{ msg }}
  </pre>
</template>

<style scoped>

</style>
