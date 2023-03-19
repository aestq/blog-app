import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import cls from './Navbar.module.scss'
import { useTranslation } from 'react-i18next'

interface NavbarProps {
  className?: string
}

export const Navbar = (props: NavbarProps) => {
  const { className } = props
  const { t } = useTranslation()

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink theme={AppLinkTheme.PRIMARY} to='/'>{t('Главная')}</AppLink>
        <AppLink theme={AppLinkTheme.PRIMARY} to='/about'>{t('О сайте')}</AppLink>
      </div>
    </div>
  )
}
