import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { getArticleDetailsData } from 'entities/Article'
import { routePath } from 'shared/config/routeConfig/routeConfig'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { Button } from 'shared/ui/Button/Button'
import { getCanEditArticle } from '../../model/selectors/article'
import cls from './ArticleDetailsPageHeader.module.scss'

interface ArticleDetailsPageHeaderProps {
  className?: string
}

export const ArticleDetailsPageHeader = memo((props: ArticleDetailsPageHeaderProps) => {
  const { className } = props
  const { t } = useTranslation()
  const isCanEdit = useSelector(getCanEditArticle)
  const article = useSelector(getArticleDetailsData)

  return (
    <div className={classNames(cls.ArticleDetailsPageHeader, {}, [className])}>
      <AppLink to={routePath.articles}>
        <Button theme='outline'>
          {t('Назад к списку')}
        </Button>
      </AppLink>
      {isCanEdit && (
        <AppLink className={cls.buttonEdit} to={`${routePath.article_details}${article?.id ?? '1'}/edit`}>
          <Button theme='outline'>
            {t('Редактировать')}
          </Button>
        </AppLink>
      )}
    </div>
  )
})

ArticleDetailsPageHeader.displayName = 'ArticleDetailsPageHeader'
