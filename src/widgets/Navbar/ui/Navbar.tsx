import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'
import { useCallback, useState } from 'react'
import { LoginModal } from 'features/AuthByUsername'
import cls from './Navbar.module.scss'

interface NavbarProps {
  className?: string
}

export const Navbar = (props: NavbarProps) => {
  const { className } = props
  const { t } = useTranslation()
  const [isAuthModal, setIsAuthModal] = useState<boolean>(false)

  const onShowModal = useCallback(() => {
    setIsAuthModal(true)
  }, [])

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false)
  }, [])

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <Button
        onClick={onShowModal}
        theme={ButtonTheme.CLEAR_INVERTED}
      >
        {t('Войти')}
      </Button>
      <LoginModal
        isOpen={isAuthModal}
        onClose={onCloseModal}
      />
    </div>
  )
}
