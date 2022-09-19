export class CacheableHttpClient {
  constructor(httpClient, hashFunc) {

    this.get = (url, options) => {
      const hash = hashFunc(url)
      if (localStorage.getItem(hash)) {
        return new Promise(resolve => resolve(JSON.parse(localStorage.getItem(hash))))
      }
      return httpClient.get(url, options)
        .then(json => {
          try {
            localStorage.setItem(hash, JSON.stringify(json))
          } catch {
            localStorage.clear()
          }
          return json
        })
    }
  }
}
