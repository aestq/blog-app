import { type ButtonHTMLAttributes, type ReactNode } from 'react'
import { type Additional, classNames, type Mods } from 'shared/lib/classNames/classNames'
import cls from './Button.module.scss'

type ButtonTheme = 'clear' | 'clearInverted' | 'outline' | 'outlineRed' | 'background' | 'backgroundInverted'
type ButtonSize = 'M' | 'L' | 'XL'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  children: ReactNode
  theme?: ButtonTheme
  square?: boolean
  size?: ButtonSize
}

export const Button = (props: ButtonProps) => {
  const {
    className,
    children,
    theme = 'clear',
    square,
    size = 'M',
    ...otherProps
  } = props

  const mods: Mods = {
    [cls.square]: square
  }

  const additional: Additional = [
    className,
    cls[theme],
    cls[size]
  ]

  return (
    <button
      className={classNames(cls.Button, mods, additional)}
      {...otherProps}
    >
      {children}
    </button>
  )
}
