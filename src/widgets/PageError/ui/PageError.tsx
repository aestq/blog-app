import cls from './PageError.module.scss'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'

export const PageError = () => {
  const { t } = useTranslation()

  const reloadPage = () => {
    location.reload()
  }

  return (
    <div className={cls.PageError}>
      <p>{t('Произошла ошибка')}</p>
      <Button
        theme={ButtonTheme.CLEAR}
        onClick={reloadPage}
      >
        {t('Обновить страницу')}
      </Button>
    </div>
  )
}
