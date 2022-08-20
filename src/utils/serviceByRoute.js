import newsService from '../services/NewsService'

export default function serviceByRoute(route) {
  if (route.path === '/headlines') {
    return (pageSize, page) => newsService.topHeadlines({
      category: route.query.category,
      pageSize,
      page
    })
  }
  if (route.path === '/everything') {
    return (pageSize, page) => newsService.search({
      q: route.query.search,
      pageSize,
      page
    })
  }
  throw new Error('Should not be reached')
}
