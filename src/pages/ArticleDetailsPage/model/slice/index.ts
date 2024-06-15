import { combineReducers } from 'redux'
import { type ArticleDetailsPageSchema } from 'pages/ArticleDetailsPage'
import { articleDetailsCommentsReducer } from './articleDetailsCommentsSlice'
import {
  articleDetailsPageRecommendationsReducer
} from './articleDetailsPageRecommendationsSlice'

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
  recommendations: articleDetailsPageRecommendationsReducer,
  comments: articleDetailsCommentsReducer
})
