import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { type Article } from 'entities/Article'

export const fetchArticlesList = createAsyncThunk<Article[], void, ThunkConfig<string>>(
  'articlesPageSlice/fetchArticlesList',
  async (_, thunkAPI) => {
    const { rejectWithValue, extra } = thunkAPI
    try {
      const response = await extra.api.get<Article[]>('/articles', {
        params: {
          _expand: 'user'
        }
      })

      if (!response.data) {
        throw new Error('No data')
      }

      return response.data
    } catch (error) {
      return rejectWithValue('error')
    }
  }
)
