import { newsService } from '../config/services'

export function curryNewsApiOrgService(route) {
  if (route.path === '/headlines') {
    return (pageSize, page = 1) => newsService.findByCategory({
      category: route.query.category,
      pageSize,
      page
    })
  }
  if (route.path === '/search') {
    return (pageSize, page = 1) => newsService.searchByQuery({
      q: route.query.q,
      pageSize,
      page
    })
  }
  throw new Error('Should not be reached')
}
