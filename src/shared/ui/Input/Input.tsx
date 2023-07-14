import { type ChangeEvent, type InputHTMLAttributes, memo } from 'react'
import { classNames, type Mods } from 'shared/lib/classNames/classNames'
import cls from './Input.module.scss'

type InputElementProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

interface InputProps extends InputElementProps {
  className?: string
  value?: string | number
  onChange?: (value: string) => void
  readOnly?: boolean
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    onChange,
    value,
    type = 'text',
    readOnly,
    ...otherProps
  } = props

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value)
  }

  const mods: Mods = {
    [cls.readonly]: readOnly
  }

  return (
    <input
      className={classNames(cls.Input, mods, [className])}
      value={value}
      type={type}
      onChange={onChangeHandler}
      readOnly={readOnly}
      {...otherProps}
    />
  )
})
