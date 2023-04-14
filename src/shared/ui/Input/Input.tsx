import { classNames } from 'shared/lib/classNames/classNames'
import { type ChangeEvent, type InputHTMLAttributes, memo } from 'react'
import cls from './Input.module.scss'

type InputElementProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends InputElementProps {
  className?: string
  value?: string
  onChange?: (value: string) => void
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    onChange,
    value,
    type = 'text',
    ...otherProps
  } = props

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value)
  }

  return (
    <input
      className={classNames(cls.Input, {}, [className])}
      value={value}
      type={type}
      onChange={onChangeHandler}
      {...otherProps}
    />
  )
})
