import { memo } from 'react'
import { type Additional, classNames } from 'shared/lib/classNames/classNames'
import cls from './Text.module.scss'

type TextTheme = 'primary' | 'error' | 'inverted'
type TextAlign = 'left' | 'center' | 'right'
type TextSize = 's' | 'm'

interface TextProps {
  className?: string
  title?: string
  text?: string
  theme?: TextTheme
  align?: TextAlign
  size?: TextSize
}

export const Text = memo((props: TextProps) => {
  const {
    className,
    title,
    text,
    theme = 'primary',
    align = 'left',
    size = 's'
  } = props

  const additional: Additional = [
    className,
    cls[theme],
    cls[align],
    cls[size]
  ]

  return (
    <div className={classNames(cls.Text, {}, additional)}>
      {title && <p className={cls.title}>{title}</p>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  )
})
