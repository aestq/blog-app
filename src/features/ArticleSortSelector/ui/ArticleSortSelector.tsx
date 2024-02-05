import { memo, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { ArticleSortField } from 'entities/Article'
import { classNames } from 'shared/lib/classNames/classNames'
import { type SortOrder } from 'shared/types'
import { Select, type SelectItem } from 'shared/ui/Select/Select'
import cls from './ArticleSortSelector.module.scss'

interface ArticleSortSelectorProps {
  className?: string
  sort: ArticleSortField
  order: SortOrder
  onChangeOrder: (newOrder: SortOrder) => void
  onChangeSort: (newSort: ArticleSortField) => void
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
  const {
    className,
    sort,
    onChangeSort,
    order,
    onChangeOrder
  } = props
  const { t } = useTranslation()

  const orderOptions = useMemo<SelectItem<SortOrder>[]>(() => [
    {
      content: t('возрастанию'),
      value: 'asc'
    },
    {
      content: t('убыванию'),
      value: 'desc'
    }
  ], [t])

  const sortFieldOptions = useMemo<SelectItem<ArticleSortField>[]>(() => [
    {
      content: t('дате создания'),
      value: ArticleSortField.CREATED
    },
    {
      content: t('названию'),
      value: ArticleSortField.TITLE
    },
    {
      content: t('просмотрам'),
      value: ArticleSortField.VIEWS
    }
  ], [t])

  return (
    <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
      <Select<ArticleSortField>
        options={sortFieldOptions}
        label={t('Сортировать по')}
        value={sort}
        onChange={onChangeSort}
      />
      <Select<SortOrder>
        className={cls.order}
        options={orderOptions}
        label={t('По')}
        value={order}
        onChange={onChangeOrder}
      />
    </div>
  )
})

ArticleSortSelector.displayName = 'ArticleSortSelector'
