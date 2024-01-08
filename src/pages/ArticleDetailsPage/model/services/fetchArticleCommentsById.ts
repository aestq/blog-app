import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { type Comment } from 'entities/Comment'

export const fetchArticleCommentsById = createAsyncThunk<Comment[], string | undefined, ThunkConfig<string>>(
  'articleDetailsComments/fetchArticleCommentsById',
  async (id, thunkAPI) => {
    const { rejectWithValue, extra } = thunkAPI

    if(!id) {
      return rejectWithValue('error')
    }

    try {
      const response = await extra.api.get<Comment[]>('/comments', {
        params: {
          articleId: id,
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
