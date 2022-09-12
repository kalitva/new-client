import cacheableHttpClient from '../provider/cacheableHttpClient'

/*
 * resource: https://currency.getgeoapi.com/documentation
 */
export default new class RateExchangeService {
  constructor() {
    const apiKey = '3236a2ea13e81b9f316246bdf577a3cb6304baff'

    this.course = (from, to) => {
      const url = `https://api.getgeoapi.com/v2/currency/convert?api_key=${apiKey}&from=${from}&to=${to}`
      return cacheableHttpClient.get(url)
    }

    this.list = () => {
      return cacheableHttpClient.get(`https://api.getgeoapi.com/v2/currency/list?api_key=${apiKey}`)
    }
  }
}
