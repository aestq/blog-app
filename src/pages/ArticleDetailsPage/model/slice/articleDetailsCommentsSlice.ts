import { createEntityAdapter, createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type StateSchema } from 'app/providers/StoreProvider'
import { type Comment } from 'entities/Comment'
import { fetchArticleCommentsById } from '../services/fetchArticleCommentsById'
import { type ArticleDetailsCommentsSchema } from '../types/articleDetailsCommentsSchema'

const commentsAdapter = createEntityAdapter<Comment>({
  selectId: (comment: Comment) => comment.id
})

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
  (state) => state.articleDetailsPage?.comments ?? commentsAdapter.getInitialState()
)

const articleDetailsCommentsSlice = createSlice({
  name: 'articleDetailsComments',
  initialState: commentsAdapter.getInitialState<ArticleDetailsCommentsSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {}
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchArticleCommentsById.fulfilled, (state, action: PayloadAction<Comment[]>) => {
      commentsAdapter.setAll(state, action.payload)
      state.isLoading = false
    })
    builder.addCase(fetchArticleCommentsById.pending, (state) => {
      state.isLoading = true
      state.error = undefined
    })
    builder.addCase(fetchArticleCommentsById.rejected, (state, action) => {
      state.error = action.payload
      state.isLoading = false
    })
  }
})

export const { reducer: articleDetailsCommentsReducer } = articleDetailsCommentsSlice
