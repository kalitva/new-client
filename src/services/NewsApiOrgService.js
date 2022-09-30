/*
 * docs: https://newsapi.org/docs/endpoints/top-headlines
 */
export class NewsApiOrgService {
  constructor(httpClient) {
    const headers = { 'X-Api-Key': 'eb529d35b87848f0b55cfd9ff538aaf8' }

    this.getByCategory = (category, limit, offset) => {
      return doGet('https://newsapi.org/v2/top-headlines', {
        category,
        pageSize: limit,
        page: offset
      })
    }

    this.searchByQuery = (query, limit, offset) => {
      return doGet('https://newsapi.org/v2/everything', {
        q: query,
        pageSize: limit,
        page: offset
      })
    }

    this.getTopHeadlines = (limit, offset) => {
      return this.getByCategory('general', limit, offset)
    }

    this.categories = () => {
      return ['business', 'entertainment', 'health', 'sports', 'technology']
    }

    this.maxLimit = () => 100

    function doGet(url, params) {
      const urlWithParams = new URL(url)
      urlWithParams.search = new URLSearchParams({ ...params, language: 'en' })
      return httpClient.get(urlWithParams, { headers })
        .then(json => {
          return json.articles.map(a => ({
            title: a.title,
            url: a.url,
            imgUrl: a.urlToImage,
            summary: a.description,
            source: a.source.name,
            publicationDate: new Date(a.publishedAt)
          }))
        })
    }
  }
}
