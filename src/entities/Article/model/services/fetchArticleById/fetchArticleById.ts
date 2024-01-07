import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { type Article } from '../../types/acticle'

export const fetchArticleById = createAsyncThunk<Article, string, ThunkConfig<string>>(
  'articleDetails/fetchArticleById',
  async (id, thunkAPI) => {
    const { rejectWithValue, extra } = thunkAPI
    try {
      const response = await extra.api.get<Article>(`/articles/${id}`)

      if (!response.data) {
        throw new Error('No data')
      }

      return response.data
    } catch (error) {
      return rejectWithValue('error')
    }
  }
)
