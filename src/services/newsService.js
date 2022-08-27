import cacheableHttpClient from '../utils/cacheableHttpClient'

/*
 * docs: https://newsapi.org/docs/endpoints/top-headlines
 */
export default new class NewsService {
  constructor() {
    const headers = { 'X-Api-Key': 'eb529d35b87848f0b55cfd9ff538aaf8' }

    this.topHeadlines = function(params) {
      const url = new URL('https://newsapi.org/v2/top-headlines')
      url.search = new URLSearchParams(params)
      return cacheableHttpClient.get(url, { headers })
    }

    this.search = function(params) {
      const url = new URL('https://newsapi.org/v2/everything')
      url.search = new URLSearchParams(params)
      return cacheableHttpClient.get(url, { headers })
    }
  }
}
