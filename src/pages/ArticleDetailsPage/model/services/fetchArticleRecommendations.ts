import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { type Article } from 'entities/Article'

export const fetchArticleRecommendations = createAsyncThunk<Article[], void, ThunkConfig<string>>(
  'articleDetailsPageRecommendations/fetchArticlesList',
  async (_, thunkAPI) => {
    const { rejectWithValue, extra } = thunkAPI

    try {
      const response = await extra.api.get<Article[]>('/articles', {
        params: {
          _limit: 4
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
