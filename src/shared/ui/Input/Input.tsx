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
    placeholder,
    ...otherProps
  } = props

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value)
  }

  const mods: Mods = {
    [cls.readonly]: readOnly
  }

  return (
    <label className={classNames(cls.wrapper, mods, [className])}>
      {placeholder && placeholder + '>'}
      <input
        className={cls.Input}
        value={value}
        type={type}
        onChange={onChangeHandler}
        readOnly={readOnly}
        {...otherProps}
      />
    </label>
  )
})
