<script>
import newsService from '../services/NewsService.js'
export default {
  data() {
    return {
      msg: ''
    }
  },
  mounted() {
    newsService.search({ q: 'war', pageSize: 10, page: 1 })
      .then(json => this.msg = json)
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
