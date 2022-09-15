import cacheableHttpClient from '../provider/cacheableHttpClient'

/*
 * docs: https://newsapi.org/docs/endpoints/top-headlines
 */
export default new class NewsService {
  constructor() {
    const headers = { 'X-Api-Key': 'eb529d35b87848f0b55cfd9ff538aaf8' }

    this.headlines = params => {
      const url = new URL('https://newsapi.org/v2/top-headlines')
      url.search = new URLSearchParams(params)
      return cacheableHttpClient.get(url, { headers })
        .then(json => json.articles)
    }

    this.search = params => {
      const url = new URL('https://newsapi.org/v2/everything')
      url.search = new URLSearchParams(params)
      return cacheableHttpClient.get(url, { headers })
        .then(json => json.articles)
    }
  }
}
