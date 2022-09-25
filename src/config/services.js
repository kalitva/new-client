import { httpClient } from './provider'
import { NewsApiOrgService } from '../services/NewsApiOrgService'
import { RateExchangeService } from '../services/RateExchangeService'
import { curryNewsApiOrgService } from '../services/curryNewsService'

export const newsService = new NewsApiOrgService(httpClient)
export const rateExchangeService = new RateExchangeService(httpClient)
export const curryNewsService = curryNewsApiOrgService
