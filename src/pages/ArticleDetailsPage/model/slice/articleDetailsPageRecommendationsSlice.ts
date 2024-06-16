import { createEntityAdapter, createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type StateSchema } from 'app/providers/StoreProvider'
import { type Article } from 'entities/Article'
import { fetchArticleRecommendations } from '../services/fetchArticleRecommendations'
import { type ArticleDetailsPageRecommendationsSchema } from '../types/articleDetailsPageRecommendationsSchema'

const reommendationsAdapter = createEntityAdapter<Article>({
  selectId: (article: Article) => article.id
})

export const getArticleRecommendations = reommendationsAdapter.getSelectors<StateSchema>(
  (state) => state.articleDetailsPage?.recommendations ?? reommendationsAdapter.getInitialState()
)

const articleDetailsPageRecommendationsSlice = createSlice({
  name: 'articleDetailsPageRecommendations',
  initialState: reommendationsAdapter.getInitialState<ArticleDetailsPageRecommendationsSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {}
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchArticleRecommendations.fulfilled, (state, action: PayloadAction<Article[]>) => {
      reommendationsAdapter.setAll(state, action.payload)
      state.isLoading = false
    })
    builder.addCase(fetchArticleRecommendations.pending, (state) => {
      state.isLoading = true
      state.error = undefined
    })
    builder.addCase(fetchArticleRecommendations.rejected, (state, action) => {
      state.error = action.payload
      state.isLoading = false
    })
  }
})

export const { reducer: articleDetailsPageRecommendationsReducer } = articleDetailsPageRecommendationsSlice
