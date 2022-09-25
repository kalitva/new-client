/*
 * docs: https://newsapi.org/docs/endpoints/top-headlines
 */
export class NewsApiOrgService {
  constructor(httpClient) {
    const headers = { 'X-Api-Key': 'eb529d35b87848f0b55cfd9ff538aaf8' }

    this.headlines = params => {
      const url = new URL('https://newsapi.org/v2/top-headlines')
      url.search = new URLSearchParams(params)
      return httpClient.get(url, { headers })
        .then(json => map(json.articles))
    }

    this.search = params => {
      const url = new URL('https://newsapi.org/v2/everything')
      url.search = new URLSearchParams(params)
      return httpClient.get(url, { headers })
        .then(json => map(json.articles))
    }

    this.categories = () => {
      return ['general', 'business', 'entertainment', 'health', 'sports', 'technology']
    }

    function map(articles) {
      return articles.map(a => ({
        title: a.title,
        url: a.url,
        imgUrl: a.urlToImage,
        summary: a.description,
        source: a.source.name,
        publicationDate: a.publishedAt
      }))
    }
  }
}
