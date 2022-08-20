/*
 * docs: https://newsapi.org/docs/endpoints/top-headlines
 */
export default new class NewsService {
  constructor() {
    const headers = { 'X-Api-Key': 'eb529d35b87848f0b55cfd9ff538aaf8' }

    this.topHeadlines = function(params) {
      const url = new URL('https://newsapi.org/v2/top-headlines')
      url.search = new URLSearchParams(params)
      return doFetch(url)
    }

    this.search = function(params) {
      const url = new URL('https://newsapi.org/v2/everything')
      url.search = new URLSearchParams(params)
      return doFetch(url)
    }

    function doFetch(url) {
      return fetch(url, { headers })
        .then(r => r.json())
        .then(json => json.articles)
    }
  }
}
