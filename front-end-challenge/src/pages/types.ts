export interface News {
  status: string
  totalResults: number
  articles: Article[]
}

export interface Article {
  author: string | null
  title: string
  url: string
  urlToImage: string | null
  publishedAt: string
  description: string
  content: string
  source: {
    id: string | null
    name: string
  }
}

export interface UserData {
  username: string
  password: string
  name?: string
}
