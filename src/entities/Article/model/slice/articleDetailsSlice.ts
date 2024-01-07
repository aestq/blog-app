import { createSlice } from '@reduxjs/toolkit'
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById'
import { type ArticleDetailsSchema } from '../types/articleDetailsSchema'

const initialState: ArticleDetailsSchema = {
  data: undefined,
  isLoading: false,
  error: undefined
}

const articleDetailsSlice = createSlice({
  name: 'articleDetails',
  reducers: {},
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchArticleById.fulfilled, (state, action) => {
      state.data = action.payload
      state.isLoading = false
    })
    builder.addCase(fetchArticleById.pending, (state) => {
      state.isLoading = true
      state.error = undefined
    })
    builder.addCase(fetchArticleById.rejected, (state, action) => {
      state.error = action.payload
      state.isLoading = false
    })
  }
})

export const { reducer: articleDetailsReducer } = articleDetailsSlice
// export const { actions: articleDetailsActions } = articleDetailsSlice
