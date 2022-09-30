/*
 * docs: https://newsapi.org/docs/endpoints/top-headlines
 */
export class NewsApiOrgService {
  constructor(httpClient) {
    const headers = { 'X-Api-Key': 'eb529d35b87848f0b55cfd9ff538aaf8' }

    this.findByCategory = params => {
      return doGet('https://newsapi.org/v2/top-headlines', params)
    }

    this.searchByQuery = params => {
      return doGet('https://newsapi.org/v2/everything', params)
    }

    this.getTopHeadlines = params => {
      return this.findByCategory({ ...params, category: 'general' })
    }

    this.categories = () => {
      return ['business', 'entertainment', 'health', 'sports', 'technology']
    }

    this.defaultPageSize = () => 20

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
