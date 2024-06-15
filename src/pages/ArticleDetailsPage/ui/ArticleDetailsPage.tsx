import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { Page } from 'widgets/Page'
import { AddCommentForm } from 'features/AddCommentForm'
import { ArticleDetails, ArticleList } from 'entities/Article'
import { CommentList } from 'entities/Comment'
import { routePath } from 'shared/config/routeConfig/routeConfig'
import { classNames } from 'shared/lib/classNames/classNames'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect'
import { type ReducersList, useReducersLoader } from 'shared/lib/hooks/useReducersLoader'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { Button } from 'shared/ui/Button/Button'
import { Text } from 'shared/ui/Text/Text'
import { getArticleCommentsIsLoading } from '../model/selectors/comments'
import { getArticleRecommendationsIsLoading } from '../model/selectors/recommendations'
import { addCommentForArticle } from '../model/services/addCommentForArticle'
import { fetchArticleCommentsById } from '../model/services/fetchArticleCommentsById'
import { fetchArticleRecommendations } from '../model/services/fetchArticleRecommendations'
import { articleDetailsPageReducer } from '../model/slice'
import { getArticleComments } from '../model/slice/articleDetailsCommentsSlice'
import { getArticleRecommendations } from '../model/slice/articleDetailsPageRecommendationsSlice'
import cls from './ArticleDetailsPage.module.scss'

interface ArticleDetailsPageProps {
  className?: string
}

const reducersList: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer
}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
  useReducersLoader({ reducersList, removeAfterUnmount: true })
  const { className } = props
  const { t } = useTranslation('article-details')
  const { id } = useParams<{ id: string }>()
  const dispatch = useAppDispatch()
  const comments = useSelector(getArticleComments.selectAll)
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading)
  const recommendations = useSelector(getArticleRecommendations.selectAll)
  const recommendationsIsLoading = useSelector(getArticleRecommendationsIsLoading)
  // const commentsError = useSelector(getArticleCommentsError)

  const onSendComment = useCallback((text: string) => {
    dispatch(addCommentForArticle(text))
  }, [dispatch])

  useInitialEffect(() => {
    dispatch(fetchArticleCommentsById(id))
  }, [id])

  useInitialEffect(() => {
    dispatch(fetchArticleRecommendations())
  }, [])

  if(!id) {
    return (
      <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        {t('Статья не найдена')}
      </div>
    )
  }

  return (
    <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
      <AppLink to={routePath.articles}>
        <Button theme='outline'>
          {t('Назад к списку')}
        </Button>
      </AppLink>
      <ArticleDetails id={id} />
      <Text
        className={cls.commentsTitle}
        title={t('Рекомендуем')}
        size='m'
      />
      <ArticleList
        className={cls.recommendations}
        articles={recommendations}
        isLoading={recommendationsIsLoading}
        target='_blank'
      />
      <Text
        className={cls.commentsTitle}
        title={t('Комментарии')}
        size='m'
      />
      <AddCommentForm onSendComment={onSendComment} />
      <CommentList
        isLoading={commentsIsLoading}
        comments={comments}
      />
    </Page>
  )
}

export default memo(ArticleDetailsPage)
