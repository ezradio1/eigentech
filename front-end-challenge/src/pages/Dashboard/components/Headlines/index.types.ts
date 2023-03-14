export interface Headline {
  status: string
  totalResults: string
  articles: Article[]
}

export interface Article {
  author: string
  title: string
  url: string
  urlToImage: string
  publishedAt: string
  content: string
  source: {
    name: string
  }
}
