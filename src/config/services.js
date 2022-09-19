import { httpClient } from './provider'
import { NewsService } from '../services/NewsService'
import { RateExchangeService } from '../services/RateExchangeService'

export const newsService = new NewsService(httpClient)
export const rateExchangeService = new RateExchangeService(httpClient)
