import { classNames } from 'shared/lib/classNames/classNames'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader'
import { editableProfileReducer } from '../../model/slice/EditableProfileSlice'
import cls from './EditableProfile.module.scss'
import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { fetchProfileData } from '../../model/services/fetchProfileData'
import { useSelector } from 'react-redux'
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData'
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading'
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError'
import { ProfileCard } from 'entities/Profile'
import { EditableProfileHeader } from '../EditableProfileHeader/EditableProfileHeader'

const reducers: ReducersList = {
  editableProfile: editableProfileReducer
}

interface EditableProfileProps {
  className?: string
}

export const EditableProfile = (props: EditableProfileProps) => {
  const { className } = props
  const { t } = useTranslation('profile')
  const dispatch = useAppDispatch()
  const data = useSelector(getProfileData)
  const isLoading = useSelector(getProfileIsLoading)
  const error = useSelector(getProfileError)

  useEffect(() => {
    dispatch(fetchProfileData())
  }, [dispatch])

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(cls.EditableProfile, {}, [className])}>
        <EditableProfileHeader />
        <ProfileCard />
      </div>
    </DynamicModuleLoader>
  )
}
