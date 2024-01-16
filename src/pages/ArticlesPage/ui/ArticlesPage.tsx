import { memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { Page } from 'widgets/Page'
import { ArticleViewSelector } from 'features/ArticleViewSelector'
import { ArticleList, type ArticleView } from 'entities/Article'
import { classNames } from 'shared/lib/classNames/classNames'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect'
import { type ReducersList, useReducersLoader } from 'shared/lib/hooks/useReducersLoader'
import {
  getArticlesPageIsLoading,
  getArticlesPageView,
  getArticlesPageError
} from '../model/selectors/articlesPageSelectors'
import { fetchNextArticlesPage } from '../model/services/fetchNextArticlesPage/fetchNextArticlesPage'
import { initArticlesPage } from '../model/services/initArticlesPage/initArticlesPage'
import { articlesPageActions, articlesPageReducer, getArticles } from '../model/slice/articlesPageSlice'
import cls from './ArticlesPage.module.scss'

interface ArticlesPageProps {
  className?: string
}

const reducersList: ReducersList = {
  articlesPage: articlesPageReducer
}

const ArticlesPage = (props: ArticlesPageProps) => {
  useReducersLoader({ reducersList })
  const { className } = props
  const dispatch = useAppDispatch()
  const articles = useSelector(getArticles.selectAll)
  const isLoading = useSelector(getArticlesPageIsLoading)
  const error = useSelector(getArticlesPageError)
  const view = useSelector(getArticlesPageView)

  const onChangeView = useCallback((newView: ArticleView) => {
    dispatch(articlesPageActions.setView(newView))
  }, [dispatch])

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPage())
  }, [dispatch])

  useInitialEffect(() => {
    dispatch(initArticlesPage())
  })

  // TODO: fix error
  if(error) {
    return (
      <>{error}</>
    )
  }

  return (
    <Page
      className={classNames(cls.ArticlesPage, {}, [className])}
      onScrollEnd={onLoadNextPart}
    >
      <ArticleViewSelector
        setView={onChangeView}
        view={view}
      />
      <ArticleList
        articles={articles}
        isLoading={isLoading}
        view={view}
      />
    </Page>
  )
}

export default memo(ArticlesPage)
