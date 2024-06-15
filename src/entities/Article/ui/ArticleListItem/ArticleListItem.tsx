import { type HTMLAttributeAnchorTarget, memo } from 'react'
import { useTranslation } from 'react-i18next'
import EyeIcon from 'shared/assets/icons/eye-icon.svg'
import { routePath } from 'shared/config/routeConfig/routeConfig'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { Button } from 'shared/ui/Button/Button'
import { Card } from 'shared/ui/Card/Card'
import { Icon } from 'shared/ui/Icon/Icon'
import { Text } from 'shared/ui/Text/Text'
import {
  type Article, ArticleBlockType, type ArticleTextBlock, ArticleView
} from '../../model/types/acticle'
import { TextBlock } from '../TextBlock/TextBlock'
import cls from './ArticleListItem.module.scss'

interface ArticleListItemProps {
  className?: string
  view: ArticleView
  article: Article
  target?: HTMLAttributeAnchorTarget
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
  const {
    className,
    article,
    view,
    target
  } = props
  const { t } = useTranslation()

  const types = <Text className={cls.types} text={article.type.join(', ')} />
  const views = (
    <div className={cls.viewsContainer}>
      <Text text={String(article.views)}/>
      <Icon Svg={EyeIcon} />
    </div>
  )

  if (view === ArticleView.LIST) {
    const textBlock = article.blocks.find(
      block => block.type === ArticleBlockType.TEXT
    ) as ArticleTextBlock | undefined

    return (
      <Card className={classNames(cls[view], {}, [className])}>
        <div className={cls.header}>
          {article.user.avatar && (
            <Avatar className={cls.avatar} src={article.user.avatar} />
          )}
          <Text text={article.user.username} />
          <Text className={cls.date} text={article.createdAt} />
        </div>
        <Text className={cls.title} title={article.title} />
        {types}
        <img
          className={cls.image}
          src={article.img}
          alt={article.title}
        />
        {textBlock && (
          <TextBlock className={cls.textBlock} block={textBlock} />
        )}
        <div className={cls.footer}>
          <AppLink to={routePath.article_details + article.id} target={target}>
            <Button theme='outline'>
              {t('Читать далее...')}
            </Button>
          </AppLink>
          {views}
        </div>
      </Card>
    )
  }

  return (
    <AppLink
      to={routePath.article_details + article.id}
      target={target}
      className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
    >
      <Card>
        <div className={cls.imageContainer}>
          <img
            className={cls.image}
            src={article.img}
            alt={article.title}
            />
          <Text className={cls.date} text={article.createdAt} />
        </div>
        <div className={cls.detailsContainer}>
          {types}
          {views}
        </div>
        <Text className={cls.title} text={article.title} />
      </Card>
    </AppLink>

  )
})

ArticleListItem.displayName = 'ArticleListItem'
