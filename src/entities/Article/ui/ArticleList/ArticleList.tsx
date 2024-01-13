import { memo } from 'react'
import { ArticleListItemSkeleton } from 'entities/Article/ui/ArticleListItem/ArticleListItemSkeleton'
import { classNames } from 'shared/lib/classNames/classNames'
import { type Article, ArticleView } from '../../model/types/acticle'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import cls from './ArticleList.module.scss'

interface ArticleListProps {
  className?: string
  articles: Article[]
  isLoading?: boolean
  view?: ArticleView
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
    isLoading
  } = props

  if(isLoading) {
    return (
      <div className={classNames(cls[view], {}, [className])}>
        {getSkeletons(view)}
      </div>
    )
  }

  const renderArticles = (article: Article) => (
    <ArticleListItem
      key={article.id}
      className={cls.item}
      article={article}
      view={view}
    />
  )

  return (
    <div className={classNames(cls[view], {}, [className])}>
      {articles.length ? articles.map(renderArticles) : null}
    </div>
  )
})

ArticleList.displayName = 'ArticleList'
