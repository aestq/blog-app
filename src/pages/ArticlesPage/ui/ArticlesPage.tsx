// import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { ArticleViewSelector } from 'features/ArticleViewSelector'
import { ArticleList, type ArticleView } from 'entities/Article'
import { classNames } from 'shared/lib/classNames/classNames'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect'
import { type ReducersList, useReducersLoader } from 'shared/lib/hooks/useReducersLoader'
import {
  getArticlesPageIsLoading,
  getArticlesPageView
} from '../model/selectors/articlesPageSelectors'
import { fetchArticlesList } from '../model/services/fetchArticlesList'
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
  // const error = useSelector(getArticlesPageError)
  const view = useSelector(getArticlesPageView)
  // const { t } = useTranslation()

  const onChangeView = useCallback((newView: ArticleView) => {
    dispatch(articlesPageActions.setView(newView))
  }, [dispatch])

  useInitialEffect(() => {
    dispatch(fetchArticlesList())
    dispatch(articlesPageActions.initState())
  })

  return (
    <div className={classNames(cls.ArticlesPage, {}, [className])}>
      <ArticleViewSelector
        setView={onChangeView}
        view={view}
      />
      <ArticleList
        articles={articles}
        isLoading={isLoading}
        view={view}
      />
    </div>
  )
}

export default memo(ArticlesPage)
