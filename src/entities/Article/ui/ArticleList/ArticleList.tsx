import { type HTMLAttributeAnchorTarget, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Text } from 'shared/ui/Text/Text'
import { type Article, ArticleView } from '../../model/types/acticle'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton'
import cls from './ArticleList.module.scss'

interface ArticleListProps {
  className?: string
  articles: Article[]
  isLoading?: boolean
  view?: ArticleView
  target?: HTMLAttributeAnchorTarget
}

const getSkeletons = (view: ArticleView) => (
  new Array(view === ArticleView.TILE ? 8 : 3)
    .fill(0)
    .map((_, index) => (
      <ArticleListItemSkeleton
        className={cls.item}
        key={index}
        view={view}
      />
    ))
)

export const ArticleList = memo((props: ArticleListProps) => {
  const {
    className,
    articles,
    view = ArticleView.TILE,
    isLoading,
    target
  } = props
  const { t } = useTranslation()

  const renderArticles = useCallback((article: Article) => (
    <ArticleListItem
      key={article.id}
      className={cls.item}
      article={article}
      target={target}
      view={view}
    />
  ), [view, target])

  if(!articles.length && !isLoading) {
    return (
      <div className={classNames(cls[view], {}, [className])}>
        <Text
          align='center'
          title={t('Статьи не найдены')}
        />
      </div>
    )
  }

  return (
    <div className={classNames(cls[view], {}, [className])}>
      {articles.map(renderArticles)}
      {isLoading && getSkeletons(view)}
    </div>
  )
})

ArticleList.displayName = 'ArticleList'
