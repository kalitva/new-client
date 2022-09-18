const DATE_AND_HOURS_LENGTH = 13;

export default new class CacheableHttpClient {
  constructor() {
    this.get = function(url, options) {
      const hash = url + new Date().toISOString().slice(0, DATE_AND_HOURS_LENGTH)
      if (localStorage.getItem(hash)) {
        return new Promise(resolve => resolve(JSON.parse(localStorage.getItem(hash))))
      }
      return fetch(url, options)
        .then(response => {
          if (response.ok) {
            return response
          }
          return response.json()
            .then(json => Promise.reject(json))
        })
        .then(response => response.json())
        .then(json => {
          cacheItem(hash, JSON.stringify(json))
          return json
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
