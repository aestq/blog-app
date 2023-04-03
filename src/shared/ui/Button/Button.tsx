import { classNames, type Mods } from 'shared/lib/classNames/classNames'
import { type ButtonHTMLAttributes, type ReactNode } from 'react'
import cls from './Button.module.scss'

export enum ButtonTheme {
  CLEAR = 'clear',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted'
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl'
}

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
    theme = ButtonTheme.CLEAR,
    square,
    size = ButtonSize.M,
    ...otherProps
  } = props

  const mods: Mods = {
    [cls.square]: square
  }

  const additional: string[] = [
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
