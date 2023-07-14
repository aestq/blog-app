import { useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { type Country } from 'entities/Country'
import { type Currency } from 'entities/Currency'
import { ProfileCard } from 'entities/Profile'
import { classNames } from 'shared/lib/classNames/classNames'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useReducersLoader, type ReducersList } from 'shared/lib/hooks/useReducersLoader'
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError'
import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm'
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading'
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly'
import { fetchProfileData } from '../../model/services/fetchProfileData'
import { editableProfileActions, editableProfileReducer } from '../../model/slice/editableProfileSlice'
import { EditableProfileHeader } from '../EditableProfileHeader/EditableProfileHeader'
import cls from './EditableProfile.module.scss'

const reducersList: ReducersList = {
  editableProfile: editableProfileReducer
}

interface EditableProfileProps {
  className?: string
}

export const EditableProfile = (props: EditableProfileProps) => {
  useReducersLoader({ reducersList })
  const { className } = props
  const dispatch = useAppDispatch()
  const formData = useSelector(getProfileForm)
  const readonly = useSelector(getProfileReadonly)
  const isLoading = useSelector(getProfileIsLoading)
  const error = useSelector(getProfileError)

  useEffect(() => {
    dispatch(fetchProfileData())
  }, [dispatch])

  const onChangeFirstName = useCallback((value: string) => {
    dispatch(editableProfileActions.updateForm({ firstName: value }))
  }, [dispatch])

  const onChangeLastName = useCallback((value: string) => {
    dispatch(editableProfileActions.updateForm({ lastName: value }))
  }, [dispatch])

  const onChangeAge = useCallback((value: string) => {
    /* TODO Сделать валидацию */
    dispatch(editableProfileActions.updateForm({ age: Number(value) }))
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
}
