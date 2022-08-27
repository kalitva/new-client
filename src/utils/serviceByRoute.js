import newsService from '../services/newsService'

export default function serviceByRoute(route) {
  if (route.path === '/headlines') {
    return (pageSize, page = 1) => newsService.topHeadlines({
      category: route.query.category,
      country: 'us',
      pageSize,
      page
    })
  }
  if (route.path === '/everything') {
    return (pageSize, page = 1) => newsService.search({
      q: route.query.search,
      language: 'en',
      pageSize,
      page
    })
  }
  throw new Error('Should not be reached')
}
