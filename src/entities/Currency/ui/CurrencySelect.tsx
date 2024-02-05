import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Select, type SelectItem } from 'shared/ui/Select/Select'
import { Currency } from '../model/types/currency'

const options: SelectItem<Currency>[] = [
  { value: Currency.RUB, content: Currency.RUB },
  { value: Currency.USD, content: Currency.USD },
  { value: Currency.EUR, content: Currency.EUR }
]

interface CurrencySelectProps {
  className?: string
  value?: Currency
  onChange?: (value: Currency) => void
  readonly?: boolean
}

export const CurrencySelect = memo((props: CurrencySelectProps) => {
  const { className, value, onChange, readonly } = props
  const { t } = useTranslation()

  const onChangeHandler = useCallback((value: Currency) => {
    onChange?.(value)
  }, [onChange])

  return (
    <Select
      className={className}
      label={t('Валюта')}
      options={options}
      value={value}
      onChange={onChangeHandler}
      readonly={readonly}
    />
  )
})
