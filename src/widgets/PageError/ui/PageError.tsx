import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'
import cls from './PageError.module.scss'

export const PageError = () => {
  const { t } = useTranslation()

  const reloadPage = () => {
    location.reload()
  }

  return (
    <div className={cls.PageError}>
      <p>{t('Произошла ошибка')}</p>
      <Button
        theme='outline'
        onClick={reloadPage}
      >
        {t('Обновить страницу')}
      </Button>
    </div>
  )
}
