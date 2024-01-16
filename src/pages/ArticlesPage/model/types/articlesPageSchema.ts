import { type EntityState } from '@reduxjs/toolkit'
import { type ArticleView } from 'entities/Article'

export interface ArticlesPageSchema extends EntityState<any> {
  isLoading: boolean
  error?: string

  view: ArticleView
  // pagination
  page: number
  limit?: number
  hasMore: boolean
}
