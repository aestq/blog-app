import { type StateSchema } from 'app/providers/StoreProvider'
import { ArticleSortField, ArticleType, ArticleView } from 'entities/Article'

export const getArticlesPageIsLoading = (state: StateSchema) => state.articlesPage?.isLoading ?? false
export const getArticlesPageError = (state: StateSchema) => state.articlesPage?.error
export const getArticlesPageView = (state: StateSchema) => state.articlesPage?.view ?? ArticleView.TILE
export const getArticlesPageNum = (state: StateSchema) => state.articlesPage?.page ?? 1
export const getArticlesPageLimit = (state: StateSchema) => state.articlesPage?.limit ?? 8
export const getArticlesPageHasMore = (state: StateSchema) => state.articlesPage?.hasMore ?? true
export const getArticlesPageInit = (state: StateSchema) => state.articlesPage?._init ?? false
export const getArticlesPageOrder = (state: StateSchema) => state.articlesPage?.order ?? 'asc'
export const getArticlesPageSort = (state: StateSchema) => state.articlesPage?.sort ?? ArticleSortField.CREATED
export const getArticlesPageSearch = (state: StateSchema) => state.articlesPage?.search ?? ''
export const getArticlesPageType = (state: StateSchema) => state.articlesPage?.type ?? ArticleType.ALL
