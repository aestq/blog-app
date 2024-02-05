import { memo, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { ArticleType } from 'entities/Article'
import { classNames } from 'shared/lib/classNames/classNames'
import { type TabItem, Tabs } from 'shared/ui/Tabs/Tabs'
import cls from './ArticleTypeTabs.module.scss'

interface ArticleTypeTabsProps {
  className?: string
  value: ArticleType
  onChange: (value: ArticleType) => void
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
  const { className, value, onChange } = props
  const { t } = useTranslation()

  const items = useMemo<TabItem<ArticleType>[]>(() => [
    {
      value: ArticleType.ALL,
      content: t('Все статьи')
    },
    {
      value: ArticleType.IT,
      content: t('Айти')
    },
    {
      value: ArticleType.SCIENCE,
      content: t('Наука')
    },
    {
      value: ArticleType.ECONOMICS,
      content: t('Экономика')
    }
  ], [t])

  return (
    <Tabs
      className={classNames(cls.ArticleTypeTabs, {}, [className])}
      items={items}
      value={value}
      onChange={onChange}
    />
  )
})

ArticleTypeTabs.displayName = 'ArticleTypeTabs'
