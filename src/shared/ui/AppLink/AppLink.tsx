import cls from './AppLink.module.scss'
import {classNames} from 'shared/lib/classNames/classNames'
import {Link, LinkProps} from 'react-router-dom'
import {ReactNode} from 'react'

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
  className?: string
  children: ReactNode
  to: string,
  theme?: AppLinkTheme
}

export const AppLink = (props: AppLinkProps) => {
  const {
    className,
    children,
    to,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
  } = props

  return (
    <Link
      className={classNames(cls.AppLink, {}, [className, cls[theme]])}
      to={to}
      {...otherProps}
    >
      {children}
    </Link>
  )
}