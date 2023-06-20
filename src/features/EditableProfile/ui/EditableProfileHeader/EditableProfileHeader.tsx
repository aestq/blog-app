import { classNames } from 'shared/lib/classNames/classNames'
import cls from './EditableProfileHeader.module.scss'
import { useTranslation } from 'react-i18next'
import { Text } from 'shared/ui/Text/Text'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'

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
