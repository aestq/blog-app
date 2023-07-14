import { type ChangeEvent, memo, type SelectHTMLAttributes, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Select.module.scss'

export interface SelectItem {
  content: string
  value: string
}

type SelectHTMLProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, 'onChange' | 'value'>

interface SelectProps extends SelectHTMLProps {
  className?: string
  label?: string
  options?: SelectItem[]
  value?: string
  onChange?: (value: string) => void
  readonly?: boolean
}

export const Select = memo((props: SelectProps) => {
  const {
    className,
    label,
    options,
    value,
    onChange,
    readonly
  } = props

  const onChangeHandler = useCallback((event: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(event.target.value)
  }, [onChange])

  const render = useCallback((item: SelectItem) => (
    <option
      className={cls.option}
      value={item.value}
      key={item.value}
    >
      {item.content}
    </option>
  ), [])

  return (
    <div className={classNames(cls.Wrapper, {}, [className])}>
      {label && <span className={cls.label}>{label + '>'}</span>}
      <select
        className={cls.select}
        value={value}
        onChange={onChangeHandler}
        disabled={readonly}
      >
        {options?.map(render)}
      </select>
    </div>
  )
})
