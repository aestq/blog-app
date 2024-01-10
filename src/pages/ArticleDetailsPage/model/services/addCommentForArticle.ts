import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { getArticleDetailsData } from 'entities/Article'
import { type Comment } from 'entities/Comment'
import { getUserAuthData } from 'entities/User'
import { fetchArticleCommentsById } from './fetchArticleCommentsById'

export const addCommentForArticle = createAsyncThunk<Comment, string, ThunkConfig<string>>(
  'articleDetailsComments/addCommentForArticle',
  async (text, thunkAPI) => {
    const { rejectWithValue, extra, getState, dispatch } = thunkAPI
    const authData = getUserAuthData(getState())
    const article = getArticleDetailsData(getState())

    if(!authData || !text || !article) {
      return rejectWithValue('no data')
    }

    try {
      const response = await extra.api.post<Comment>('/comments', {
        articleId: article.id,
        userId: authData.id,
        text
      })

      if (!response.data) {
        throw new Error('No data')
      }

      dispatch(fetchArticleCommentsById(article.id))

      return response.data
    } catch (error) {
      return rejectWithValue('error')
    }
  }
)
