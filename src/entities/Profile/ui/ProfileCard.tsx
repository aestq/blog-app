import { useTranslation } from 'react-i18next'
import { CountrySelect, type Country } from 'entities/Country'
import { type Currency, CurrencySelect } from 'entities/Currency'
import { classNames, type Mods } from 'shared/lib/classNames/classNames'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { Input } from 'shared/ui/Input/Input'
import { Loader } from 'shared/ui/Loader/Loader'
import { HStack } from 'shared/ui/Stack/HStack'
import { VStack } from 'shared/ui/Stack/VStack'
import { Text } from 'shared/ui/Text/Text'
import { type Profile } from '../model/profile'
import cls from './ProfileCard.module.scss'

interface ProfileCardProps {
  className?: string
  data?: Profile
  isLoading?: boolean
  error?: string
  readonly?: boolean
  onChangeFirstName?: (value: string) => void
  onChangeLastName?: (value: string) => void
  onChangeAge?: (value: string) => void
  onChangeCity?: (value: string) => void
  onChangeUsername?: (value: string) => void
  onChangeAvatar?: (value: string) => void
  onChangeCurrency?: (currency: Currency) => void
  onChangeCountry?: (country: Country) => void
}

export const ProfileCard = (props: ProfileCardProps) => {
  const {
    className,
    data,
    isLoading,
    error,
    readonly,
    onChangeFirstName,
    onChangeLastName,
    onChangeAge,
    onChangeCity,
    onChangeUsername,
    onChangeAvatar,
    onChangeCurrency,
    onChangeCountry
  } = props
  const { t } = useTranslation('profile')

  if(isLoading) {
    return (
      <HStack
        className={classNames(cls.ProfileCard, {}, [className, cls.isLoading])}
        justify='center'
      >
        <Loader />
      </HStack>
    )
  }

  if(error) {
    return (
      <HStack
        className={classNames(cls.ProfileCard, {}, [className, cls.error])}
        justify='center'
      >
        <Text
          theme='error'
          title={t('Произошла ошибка при загрузке профиля')}
          text={t('Попробуйте обновить страницу')}
          align='center'
        />
      </HStack>
    )
  }

  const mods: Mods = {
    [cls.editing]: !readonly
  }

  return (
    <VStack className={classNames(cls.ProfileCard, mods, [className])} gap='8'>
      {data?.avatar && (
        <VStack align='center' max>
          <Avatar src={data?.avatar} size={100} />
        </VStack>
      )}
      <Input
        value={data?.firstName}
        placeholder={t('Имя')}
        readOnly={readonly}
        onChange={onChangeFirstName}
      />
      <Input
        value={data?.lastName}
        placeholder={t('Фамилия')}
        readOnly={readonly}
        onChange={onChangeLastName}
      />
      <Input
        value={data?.age}
        placeholder={t('Возраст')}
        readOnly={readonly}
        onChange={onChangeAge}
      />
      <Input
        value={data?.city}
        placeholder={t('Город')}
        readOnly={readonly}
        onChange={onChangeCity}
      />
      <Input
        value={data?.username}
        placeholder={t('Имя пользователя')}
        readOnly={readonly}
        onChange={onChangeUsername}
      />
      <Input
        value={data?.avatar}
        placeholder={t('Ссылка на аватар')}
        readOnly={readonly}
        onChange={onChangeAvatar}
      />
      <CurrencySelect
        value={data?.currency}
        onChange={onChangeCurrency}
        readonly={readonly}
      />
      <CountrySelect
        value={data?.country}
        onChange={onChangeCountry}
        readonly={readonly}
      />
    </VStack>
  )
}
