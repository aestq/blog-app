import { memo } from 'react'
import { ArticleView } from 'entities/Article'
import { classNames } from 'shared/lib/classNames/classNames'
import { Card } from 'shared/ui/Card/Card'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'
import cls from './ArticleListItem.module.scss'

interface ArticleListItemSkeletonProps {
  className?: string
  view: ArticleView
}

export const ArticleListItemSkeleton = memo((props: ArticleListItemSkeletonProps) => {
  const {
    className,
    view = ArticleView.TILE
  } = props

  if(view === ArticleView.LIST) {
    return (
      <Card className={classNames(cls[view], {}, [className])}>
        <div className={cls.header}>
          <Skeleton width={30} height={30} radius='50%' />
          <Skeleton className={cls.username} width={100} height={16} />
          <Skeleton className={cls.date} width={70} height={16} />
        </div>
        <Skeleton className={cls.title} width={300} height={26} />
        <Skeleton className={cls.image} height={200} />
        <div className={cls.footer}>
          <Skeleton width={140} height={36} />
          <Skeleton className={cls.viewsContainer} width={70} height={16} />
        </div>
      </Card>
    )
  }

  return (
    <Card className={classNames(cls[view], {}, [className])}>
      <Skeleton width={200} height={200} />
      <div className={cls.detailsContainer}>
        <Skeleton width={130} height={16} />
      </div>
      <Skeleton className={cls.title} width={150} height={16} />
    </Card>
  )
})

ArticleListItemSkeleton.displayName = 'ArticleListItemSkeleton'
