import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { getArticlesPageLimit, getArticlesPageNum } from 'pages/ArticlesPage/model/selectors/articlesPageSelectors'
import { type Article } from 'entities/Article'

export const fetchArticlesList = createAsyncThunk<Article[], void, ThunkConfig<string>>(
  'articlesPageSlice/fetchArticlesList',
  async (_, thunkAPI) => {
    const { rejectWithValue, extra, getState } = thunkAPI

    const page = getArticlesPageNum(getState())
    const limit = getArticlesPageLimit(getState())

    try {
      const response = await extra.api.get<Article[]>('/articles', {
        params: {
          _expand: 'user',
          _limit: limit,
          _page: page
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
