import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { type ArticleSortField, type ArticleType } from 'entities/Article'
import { type SortOrder } from 'shared/types'
import { getArticlesPageInit } from '../../selectors/articlesPageSelectors'
import { articlesPageActions } from '../../slice/articlesPageSlice'
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList'

export const initArticlesPage = createAsyncThunk<void, URLSearchParams, ThunkConfig<string>>(
  'articlesPage/initArticlesPage',
  (searchParams, thunkAPI) => {
    const { getState, dispatch } = thunkAPI
    const init = getArticlesPageInit(getState())

    if(!init) {
      const sort = searchParams.get('sort')
      const order = searchParams.get('order')
      const search = searchParams.get('q')
      const type = searchParams.get('type')

      if(sort) {
        dispatch(articlesPageActions.setSort(sort as ArticleSortField))
      }

      if(order) {
        dispatch(articlesPageActions.setOrder(order as SortOrder))
      }

      if(search) {
        dispatch(articlesPageActions.setSearch(search))
      }

      if(type) {
        dispatch(articlesPageActions.setType(type as ArticleType))
      }

      dispatch(articlesPageActions.initState())
      dispatch(fetchArticlesList({}))
    }
  }
)
