import newsService from '../services/newsService'

export default function curryNewsService(route) {
  if (route.path === '/headlines') {
    return (pageSize, page = 1) => newsService.headlines({
      category: route.query.category,
      country: 'us',
      pageSize,
      page
    })
  }
  if (route.path === '/search') {
    return (pageSize, page = 1) => newsService.search({
      q: route.query.q,
      language: 'en',
      pageSize,
      page
    })
  }
  throw new Error('Should not be reached')
}
