import cls from './Navbar.module.scss'
import {classNames} from 'shared/lib/classNames/classNames'
import {AppLink, AppLinkTheme} from 'shared/ui/AppLink/AppLink'

interface NavbarProps {
  className?: string
}

export const Navbar = (props: NavbarProps) => {
  const {className} = props

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink theme={AppLinkTheme.PRIMARY} to='/'>Main</AppLink>
        <AppLink theme={AppLinkTheme.PRIMARY} to='/about'>About</AppLink>
      </div>
    </div>
  )
}