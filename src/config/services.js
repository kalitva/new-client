import { httpClient } from './provider'
import { NewsApiOrgService } from '../services/NewsApiOrgService'
import { RateExchangeService } from '../services/RateExchangeService'

export const newsService = new NewsApiOrgService(httpClient)
export const rateExchangeService = new RateExchangeService(httpClient)
