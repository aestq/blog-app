import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { Page } from 'widgets/Page'
import { Text } from 'shared/ui/Text/Text'

export const ArticleEditPage = memo(() => {
  const { id } = useParams<{ id: string }>()
  const isEdit = Boolean(id)
  const { t } = useTranslation()

  return <Page>
    <Text
      title={isEdit ? t('Редактирование статьи') : t('Создание статьи')}
    />
  </Page>
})
