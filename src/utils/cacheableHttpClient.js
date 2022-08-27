export default new class CacheableHttpClient {
  constructor() {
    this.get = function(url, options) {
      const hash = url + new Date().toDateString()
      if (localStorage.getItem(hash)) {
        return new Promise(resolve => resolve(JSON.parse(localStorage.getItem(hash))))
      }
      return fetch(url, options)
        .then(r => r.json())
        .then(json =>  {
          cacheItem(hash, JSON.stringify(json.articles))
          return json.articles
        })
    }

    function cacheItem(key ,value) {
      try {
        localStorage.setItem(key, value)
      } catch {
        localStorage.clear()
      }
    }
  }
}
