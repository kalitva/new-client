/**
 * These serve only as a hint to implement news api services
 */
interface NewsService {

  findByCategory(params: any): Article[];

  searchByQuery(params: any): Article[];

  getTopHeadlines(params: any): Article[];

  defaultPageSize(): number;
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
