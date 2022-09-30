/**
 * docs: https://mediastack.com/documentation
 */
export class MediastackNewsService {
  constructor(httpClient) {
    const apiKey = 'e1a08d2d5b65c64552f0363b9cf27efc'

    this.getByCategory = (categories, limit, offset) => {
      return doGet({ categories, limit, offset })
    }

    this.searchByQuery = (keywords, limit, offset) => {
      return doGet({ keywords, limit, offset })
    }

    this.getTopHeadlines = (limit, offset) => {
      return doGet({ categories: 'general', limit, offset })
    }

    this.categories = () => {
      return ['business', 'entertainment', 'science', 'health', 'sports', 'technology']
    }

    this.maxLimit = () => 100

    function doGet(params) {
      const url = new URL('http://api.mediastack.com/v1/news')
      url.search = new URLSearchParams({
        access_key: apiKey,
        languages: 'en',
        ...params
      })
      return httpClient.get(url)
        .then(json => json.data.map(a => ({
          title: a.title,
          url: a.url,
          imgUrl: a.image,
          summary: a.description.replace(/[...]/, ''),
          source: a.source,
          publishedAt: new Date(a.published_at)
        })))
    }
  }
}
