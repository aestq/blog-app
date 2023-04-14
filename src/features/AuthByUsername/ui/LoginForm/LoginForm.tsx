import { classNames } from 'shared/lib/classNames/classNames'
import cls from './LoginForm.module.scss'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'

interface LoginFormProps {
  className?: string
}

export const LoginForm = (props: LoginFormProps) => {
  const { className } = props
  const { t } = useTranslation()

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Input
        className={cls.input}
        placeholder={t('Введите username')}
        autoFocus
      />
      <Input
        className={cls.input}
        placeholder={t('Введите пароль')}
      />
      <Button
        className={cls.loginButton}
        theme={ButtonTheme.OUTLINE}
      >
        {t('Войти')}
      </Button>
    </div>
  )
}
