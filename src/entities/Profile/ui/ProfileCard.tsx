import { useTranslation } from 'react-i18next'
import { type Profile } from 'entities/Profile'
import { classNames } from 'shared/lib/classNames/classNames'
import { Input } from 'shared/ui/Input/Input'
import cls from './ProfileCard.module.scss'

interface ProfileCardProps {
  className?: string
  data?: Profile
}

export const ProfileCard = (props: ProfileCardProps) => {
  const {
    className,
    data
  } = props
  const { t } = useTranslation()

  return (
    <div className={classNames(cls.ProfileCard, {}, [className])}>
      <Input
        value={data?.firstName}
        placeholder={t('Ваше имя')}
      />
      <Input
        value={data?.lastName}
        placeholder={t('Ваша фамилия')}
      />
    </div>
  )
}
