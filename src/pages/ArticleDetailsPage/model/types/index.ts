import { type ArticleDetailsCommentsSchema } from '../types/articleDetailsCommentsSchema'
import { type ArticleDetailsPageRecommendationsSchema } from '../types/articleDetailsPageRecommendationsSchema'

export interface ArticleDetailsPageSchema {
  comments: ArticleDetailsCommentsSchema
  recommendations: ArticleDetailsPageRecommendationsSchema
}
