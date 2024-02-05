import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Select, type SelectItem } from 'shared/ui/Select/Select'
import { Country } from '../model/types/country'

const options: SelectItem<Country>[] = [
  { value: Country.RUSSIA, content: Country.RUSSIA },
  { value: Country.BELARUS, content: Country.BELARUS },
  { value: Country.KAZAKHSTAN, content: Country.KAZAKHSTAN }
]

interface CountrySelectProps {
  className?: string
  value?: Country
  onChange?: (value: Country) => void
  readonly?: boolean
}

export const CountrySelect = memo((props: CountrySelectProps) => {
  const { className, value, onChange, readonly } = props
  const { t } = useTranslation()

  const onChangeHandler = useCallback((value: Country) => {
    onChange?.(value)
  }, [onChange])

  return (
    <Select
      className={className}
      label={t('Страна')}
      options={options}
      value={value}
      onChange={onChangeHandler}
      readonly={readonly}
    />
  )
})
