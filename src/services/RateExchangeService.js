/*
 * resource: https://currency.getgeoapi.com/documentation
 */
export class RateExchangeService {
  constructor(httpClient) {
    const apiKey = '3236a2ea13e81b9f316246bdf577a3cb6304baff'

    this.course = async (from, to) => {
      const url = `https://api.getgeoapi.com/v2/currency/convert?api_key=${apiKey}&from=${from}&to=${to}`
      const json = await httpClient.get(url)
      return Object.entries(json.rates)
        .map(([code, currency]) => ({
          code,
          name: currency.currency_name,
          rate: currency.rate
        }))
    }

    this.list = async () => {
      const url = `https://api.getgeoapi.com/v2/currency/list?api_key=${apiKey}`
      const json = await httpClient.get(url)
      return Object.entries(json.currencies)
        .map(([code, name]) => ({ code, name }))
    }
  }
}
