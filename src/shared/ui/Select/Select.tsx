import { type ChangeEvent, memo, type SelectHTMLAttributes, useCallback } from 'react'
import { classNames, type Mods } from 'shared/lib/classNames/classNames'
import cls from './Select.module.scss'

export interface SelectItem<T extends string> {
  content: string
  value: T
}

type SelectHTMLProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, 'onChange' | 'value'>

interface SelectProps<T extends string> extends SelectHTMLProps {
  className?: string
  label?: string
  options?: Array<SelectItem<T>>
  value?: string
  onChange?: (value: T) => void
  readonly?: boolean
}

const SelectComponent = <T extends string>(props: SelectProps<T>) => {
  const {
    className,
    label,
    options,
    value,
    onChange,
    readonly
  } = props

  const onChangeHandler = useCallback((event: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(event.target.value as T)
  }, [onChange])

  const render = useCallback((item: SelectItem<T>) => (
    <option
      className={cls.option}
      value={item.value}
      key={item.value}
    >
      {item.content}
    </option>
  ), [])

  const mods: Mods = {
    [cls.readonly]: readonly
  }

  return (
    <div className={classNames(cls.Wrapper, mods, [className])}>
      {label && (
        <span
          className={cls.label}
        >
          {label + '>'}
        </span>
      )}
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
}

export const Select = memo(SelectComponent) as typeof SelectComponent
