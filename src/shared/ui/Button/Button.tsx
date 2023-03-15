import cls from './Button.module.scss'
import {classNames} from 'shared/lib/classNames/classNames'
import {ButtonHTMLAttributes, ReactNode} from 'react'

export enum ButtonTheme {
  CLEAR = 'clear'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  children: ReactNode
  theme?: ButtonTheme
}

export const Button = (props: ButtonProps) => {
  const {
    className,
    children,
    theme = ButtonTheme.CLEAR,
    ...otherProps
  } = props

  return (
    <button
      className={classNames(cls.Button, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  )
}