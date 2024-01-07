import { type Article } from './acticle'

export interface ArticleDetailsSchema {
  data?: Article
  isLoading: boolean
  error?: string
}
