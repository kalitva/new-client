
/*        --- These serve only as a hint to implement news api services ---       */

interface NewsService {

  /**
   * Get news articles by a category
   */
  getByCategory(category: string, limit: number, offset: number): Article[];

  /**
   * Get news articles by query
   */
  searchByQuery(query: string, limit: number, offset: number): Article[];

  /**
   * Get the most important news
   */
  getTopHeadlines(limit: number, offset: number): Article[];

  /**
   * List of available categories
   */
  categories(): string[]

  /**
   * The max count of results that may be returned at a time
   */
  maxLimit(): number;
}

interface Article {

  /**
   * Article title
   */
  title: string;

  /**
   * Link to full news
   */
  url: string;

  /**
   * Url to an image
   */
  imgUrl: string;

  /**
   * The news short description
   */
  summary: string;

  /**
   * A source like BBC or Reuters
   */
  source: string;

  /**
   * Publication date
   */
  publishedAt: Date;
}
