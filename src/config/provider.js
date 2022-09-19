import { CacheableHttpClient } from '../provider/CacheableHttpClient'
import { HttpClient } from '../provider/HttpClient'

const DATE_AND_HOURS_LENGTH = 13;

export const httpClient = new CacheableHttpClient(new HttpClient, url => {
  return url + new Date().toISOString().slice(0, DATE_AND_HOURS_LENGTH)
})
