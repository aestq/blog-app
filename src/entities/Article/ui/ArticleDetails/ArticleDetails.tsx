import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import DateIcon from 'shared/assets/icons/date-icon.svg'
import EyeIcon from 'shared/assets/icons/eye-icon.svg'
import { classNames } from 'shared/lib/classNames/classNames'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect'
import { type ReducersList, useReducersLoader } from 'shared/lib/hooks/useReducersLoader'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { Icon } from 'shared/ui/Icon/Icon'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'
import { Text } from 'shared/ui/Text/Text'
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading
} from '../../model/selectors/articleDetails'
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById'
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice'
import { type ArticleBlock, ArticleBlockType } from '../../model/types/acticle'
import { CodeBlock } from '../CodeBlock/CodeBlock'
import { ImageBlock } from '../ImageBlock/ImageBlock'
import { TextBlock } from '../TextBlock/TextBlock'
import cls from './ArticleDetails.module.scss'

interface ArticleDetailsProps {
  className?: string
  id: string
}

const reducersList: ReducersList = {
  articleDetails: articleDetailsReducer
}

const renderBlocks = (block: ArticleBlock) => {
  switch (block.type) {
    case ArticleBlockType.TEXT:
      return (
        <TextBlock
          key={block.id}
          className={cls.block}
          block={block}
        />
      )
    case ArticleBlockType.IMAGE:
      return (
        <ImageBlock
          key={block.id}
          className={cls.block}
          block={block}
        />
      )
    case ArticleBlockType.CODE:
      return (
        <CodeBlock
          key={block.id}
          className={cls.block}
          block={block}
        />
      )
    default:
      return null
  }
}

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
  useReducersLoader({ reducersList, removeAfterUnmount: true })
  const { className, id } = props
  const dispatch = useAppDispatch()
  const { t } = useTranslation('article-details')
  const data = useSelector(getArticleDetailsData)
  const isLoading = useSelector(getArticleDetailsIsLoading)
  const error = useSelector(getArticleDetailsError)

  useInitialEffect(() => {
    dispatch(fetchArticleById(id))
  }, [id])

  if(isLoading) {
    return (
      <div className={classNames(cls.ArticleDetails, {}, [className])}>
        <Skeleton className={cls.avatar} width={200} height={200} radius='50%' />
        <Skeleton className={cls.title} width={300} height={32} radius={5} />
        <Skeleton className={cls.skeleton} width={600} height={24} radius={5} />
        <Skeleton className={cls.skeleton} width='100%' height={200} />
        <Skeleton className={cls.skeleton} width='100%' height={200} />
      </div>
    )
  }

  if(error) {
    return (
      <div className={classNames(cls.ArticleDetails, {}, [className])}>
        <Text
          title={t('Произошла ошибка при загрузке статьи')}
          theme='error'
          align='center'
        />
      </div>
    )
  }

  return (
    <div className={classNames(cls.ArticleDetails, {}, [className])}>
      <div className={cls.avatarContainer}>
        <Avatar
          className={cls.avatar}
          size={200}
          src={data?.img}
        />
      </div>
      <Text
        title={data?.title}
        text={data?.subtitle}
        size='m'
      />
      <div className={cls.articleInfo}>
        <Icon className={cls.icon} Svg={EyeIcon} />
        <Text text={String(data?.views)} />
      </div>
      <div className={cls.articleInfo}>
        <Icon className={cls.icon} Svg={DateIcon} />
        <Text text={data?.createdAt} />
      </div>
      {data?.blocks.map(renderBlocks)}
    </div>
  )
})

ArticleDetails.displayName = 'ArticleDetails'
