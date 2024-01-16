import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { getArticlesPageInit } from '../../selectors/articlesPageSelectors'
import { articlesPageActions } from '../../slice/articlesPageSlice'
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList'

export const initArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
  'articlesPage/initArticlesPage',
  (_, thunkAPI) => {
    const { getState, dispatch } = thunkAPI
    const init = getArticlesPageInit(getState())

    if(!init) {
      dispatch(articlesPageActions.initState())
      dispatch(fetchArticlesList())
    }
  }
)
