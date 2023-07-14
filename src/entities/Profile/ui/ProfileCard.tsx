import { useTranslation } from 'react-i18next'
import { CountrySelect, type Country } from 'entities/Country'
import { type Currency, CurrencySelect } from 'entities/Currency'
import { type Profile } from 'entities/Profile'
import { classNames, type Mods } from 'shared/lib/classNames/classNames'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { Input } from 'shared/ui/Input/Input'
import { Loader } from 'shared/ui/Loader/Loader'
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text'
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
      <div className={classNames(cls.ProfileCard, {}, [className, cls.isLoading])}>
        <Loader />
      </div>
    )
  }

  if(error) {
    return (
      <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
        <Text
          theme={TextTheme.ERROR}
          title={t('Произошла ошибка при загрузке профиля')}
          text={t('Попробуйте обновить страницу')}
          align={TextAlign.CENTER}
        />
      </div>
    )
  }

  const mods: Mods = {
    [cls.editing]: !readonly
  }

  return (
    <div className={classNames(cls.ProfileCard, mods, [className])}>
      {data?.avatar && (
        <div className={cls.avatarWrapper}>
          <Avatar src={data?.avatar} size={100} />
        </div>
      )}
      <Input
        value={data?.firstName}
        placeholder={t('Ваше имя')}
        readOnly={readonly}
        onChange={onChangeFirstName}
      />
      <Input
        value={data?.lastName}
        placeholder={t('Ваша фамилия')}
        readOnly={readonly}
        onChange={onChangeLastName}
      />
      <Input
        value={data?.age}
        placeholder={t('Ваш возраст')}
        readOnly={readonly}
        onChange={onChangeAge}
      />
      <Input
        value={data?.city}
        placeholder={t('Ваш город')}
        readOnly={readonly}
        onChange={onChangeCity}
      />
      <Input
        value={data?.username}
        placeholder={t('Ваше имя пользователя')}
        readOnly={readonly}
        onChange={onChangeUsername}
      />
      <Input
        value={data?.avatar}
        placeholder={t('Ваша ссылка на аватар')}
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
    </div>
  )
}
