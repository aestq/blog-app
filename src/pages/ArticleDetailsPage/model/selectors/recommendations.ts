import { type StateSchema } from 'app/providers/StoreProvider'

export const getArticleRecommendationsIsLoading = (state: StateSchema) => {
  return state.articleDetailsPage?.recommendations?.isLoading ?? false
}
export const getArticleRecommendationsError = (state: StateSchema) => state.articleDetailsPage?.recommendations?.error
