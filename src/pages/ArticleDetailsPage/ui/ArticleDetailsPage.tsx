import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { AddCommentForm } from 'features/AddCommentForm'
import { ArticleDetails } from 'entities/Article'
import { CommentList } from 'entities/Comment'
import { classNames } from 'shared/lib/classNames/classNames'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect'
import { type ReducersList, useReducersLoader } from 'shared/lib/hooks/useReducersLoader'
import { Text } from 'shared/ui/Text/Text'
import { getArticleCommentsIsLoading } from '../model/selectors/comments'
import { addCommentForArticle } from '../model/services/addCommentForArticle'
import { fetchArticleCommentsById } from '../model/services/fetchArticleCommentsById'
import { articleDetailsCommentsReducer, getArticleComments } from '../model/slice/articleDetailsCommentsSlice'
import cls from './ArticleDetailsPage.module.scss'

interface ArticleDetailsPageProps {
  className?: string
}

const reducersList: ReducersList = {
  articleDetailsComments: articleDetailsCommentsReducer
}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
  useReducersLoader({ reducersList, removeAfterUnmount: true })
  const { className } = props
  const { t } = useTranslation('article-details')
  const { id } = useParams<{ id: string }>()
  const dispatch = useAppDispatch()
  const comments = useSelector(getArticleComments.selectAll)
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading)
  // const commentsError = useSelector(getArticleCommentsError)

  const onSendComment = useCallback((text: string) => {
    dispatch(addCommentForArticle(text))
  }, [dispatch])

  useInitialEffect(() => {
    dispatch(fetchArticleCommentsById(id))
  }, [id])

  if(!id) {
    return (
      <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        {t('Статья не найдена')}
      </div>
    )
  }

  return (
    <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
      <ArticleDetails id={id} />
      <Text className={cls.commentsTitle} title={t('Комментарии')} />
      <AddCommentForm onSendComment={onSendComment} />
      <CommentList
        isLoading={commentsIsLoading}
        comments={comments}
      />
    </div>
  )
}

export default memo(ArticleDetailsPage)
