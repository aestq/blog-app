import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { useDispatch, useSelector } from 'react-redux'
import { memo, useCallback } from 'react'
import { loginActions } from '../../model/slice/loginSlice'
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import cls from './LoginForm.module.scss'
import { Text, TextTheme } from 'shared/ui/Text/Text'

interface LoginFormProps {
  className?: string
}

export const LoginForm = memo((props: LoginFormProps) => {
  const { className } = props
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const { username, password, isLoading, error } = useSelector(getLoginState)

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value))
  }, [dispatch])

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value))
  }, [dispatch])

  const onClickLogin = useCallback(() => {
    dispatch(loginByUsername({ username, password }))
  }, [dispatch, username, password])

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Text title={t('Форма авторизации')}/>
      {error && <Text text={t(error)} theme={TextTheme.ERROR} />}
      <Input
        className={cls.input}
        placeholder={t('Введите username')}
        value={username}
        onChange={onChangeUsername}
        autoFocus
      />
      <Input
        className={cls.input}
        placeholder={t('Введите пароль')}
        value={password}
        onChange={onChangePassword}
      />
      <Button
        className={cls.loginButton}
        theme={ButtonTheme.OUTLINE}
        onClick={onClickLogin}
        disabled={isLoading}
      >
        {t('Войти')}
      </Button>
    </div>
  )
})
