import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { ValidateProfileError } from 'features/EditableProfile/model/types/EditableProfileSchema'
import { type Country } from 'entities/Country'
import { type Currency } from 'entities/Currency'
import { ProfileCard } from 'entities/Profile'
import { classNames } from 'shared/lib/classNames/classNames'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect'
import { type ReducersList, useReducersLoader } from 'shared/lib/hooks/useReducersLoader'
import { Text } from 'shared/ui/Text/Text'
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError'
import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm'
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading'
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly'
import { getProfileValidateErrors } from '../../model/selectors/getProfileValidateErrors/getProfileValidateErrors'
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData'
import { editableProfileActions, editableProfileReducer } from '../../model/slice/editableProfileSlice'
import { EditableProfileHeader } from '../EditableProfileHeader/EditableProfileHeader'
import cls from './EditableProfile.module.scss'

const reducersList: ReducersList = {
  editableProfile: editableProfileReducer
}

interface EditableProfileProps {
  className?: string
  id: string
}

export const EditableProfile = memo((props: EditableProfileProps) => {
  useReducersLoader({ reducersList })
  const { className, id } = props
  const { t } = useTranslation('profile')
  const dispatch = useAppDispatch()
  const formData = useSelector(getProfileForm)
  const readonly = useSelector(getProfileReadonly)
  const isLoading = useSelector(getProfileIsLoading)
  const error = useSelector(getProfileError)
  const validateErrors = useSelector(getProfileValidateErrors)

  const validateErrorsTranslates = {
    [ValidateProfileError.SERVER_ERROR]: t('Произошла ошибка сервера'),
    [ValidateProfileError.INCORRECT_COUNTRY]: t('Некорректная страна'),
    [ValidateProfileError.INCORRECT_AGE]: t('Некорректный возраст'),
    [ValidateProfileError.INCORRECT_USER_DATA]: t('Некорректное имя и фамилия'),
    [ValidateProfileError.NO_DATA]: t('Нет данных')
  }

  useInitialEffect(() => {
    dispatch(fetchProfileData(id))
  })

  const onChangeFirstName = useCallback((value: string) => {
    dispatch(editableProfileActions.updateForm({ firstName: value }))
  }, [dispatch])

  const onChangeLastName = useCallback((value: string) => {
    dispatch(editableProfileActions.updateForm({ lastName: value }))
  }, [dispatch])

  const onChangeAge = useCallback((value: string) => {
    if(/^\d+$/.test(value) || value === '') {
      dispatch(editableProfileActions.updateForm({ age: Number(value) }))
    }
  }, [dispatch])

  const onChangeCity = useCallback((value: string) => {
    dispatch(editableProfileActions.updateForm({ city: value }))
  }, [dispatch])

  const onChangeUsername = useCallback((value: string) => {
    dispatch(editableProfileActions.updateForm({ username: value }))
  }, [dispatch])

  const onChangeAvatar = useCallback((value: string) => {
    dispatch(editableProfileActions.updateForm({ avatar: value }))
  }, [dispatch])

  const onChangeCurrency = useCallback((value: Currency) => {
    dispatch(editableProfileActions.updateForm({ currency: value }))
  }, [dispatch])

  const onChangeCountry = useCallback((value: Country) => {
    dispatch(editableProfileActions.updateForm({ country: value }))
  }, [dispatch])

  return (
    <div className={classNames(cls.EditableProfile, {}, [className])}>
      <EditableProfileHeader />
      {validateErrors?.map((error) => (
        <Text
          text={validateErrorsTranslates[error]}
          theme='error'
          key={error}
        />
      ))}
      <ProfileCard
        data={formData}
        isLoading={isLoading}
        error={error}
        readonly={readonly}
        onChangeFirstName={onChangeFirstName}
        onChangeLastName={onChangeLastName}
        onChangeAge={onChangeAge}
        onChangeCity={onChangeCity}
        onChangeUsername={onChangeUsername}
        onChangeAvatar={onChangeAvatar}
        onChangeCurrency={onChangeCurrency}
        onChangeCountry={onChangeCountry}
      />
    </div>
  )
})
