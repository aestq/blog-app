import { memo, type ReactNode } from 'react'
import { Link, type LinkProps } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './AppLink.module.scss'

type AppLinkTheme = 'primary' | 'secondary'

interface AppLinkProps extends LinkProps {
  className?: string
  children: ReactNode
  to: string
  theme?: AppLinkTheme
}

export const AppLink = memo((props: AppLinkProps) => {
  const {
    className,
    children,
    to,
    theme = 'primary',
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
})
