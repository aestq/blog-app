import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Text } from 'shared/ui/Text/Text'
import cls from './EditableProfileHeader.module.scss'

interface EditableProfileHeaderProps {
  className?: string
}

export const EditableProfileHeader = (props: EditableProfileHeaderProps) => {
  const { className } = props
  const { t } = useTranslation('profile')

  return (
    <header className={classNames(cls.EditableProfileHeader, {}, [className])}>
      <Text title={t('Профиль')} />
      <Button theme={ButtonTheme.OUTLINE}>
        {t('Редактировать')}
      </Button>
    </header>
  )
}
