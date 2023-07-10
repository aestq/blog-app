import { useEffect } from 'react'
import { ProfileCard } from 'entities/Profile'
import { classNames } from 'shared/lib/classNames/classNames'
// import { useTranslation } from 'react-i18next'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useReducersLoader, type ReducersList } from 'shared/lib/hooks/useReducersLoader'
import { fetchProfileData } from '../../model/services/fetchProfileData'
import { editableProfileReducer } from '../../model/slice/EditableProfileSlice'
// import { useSelector } from 'react-redux'
// import { getProfileData } from '../../model/selectors/getProfileData/getProfileData'
// import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading'
// import { getProfileError } from '../../model/selectors/getProfileError/getProfileError'
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
  // const { t } = useTranslation('profile')
  const dispatch = useAppDispatch()
  // const data = useSelector(getProfileData)
  // const isLoading = useSelector(getProfileIsLoading)
  // const error = useSelector(getProfileError)

  useEffect(() => {
    dispatch(fetchProfileData())
  }, [dispatch])

  return (
    <div className={classNames(cls.EditableProfile, {}, [className])}>
      <EditableProfileHeader />
      <ProfileCard />
    </div>
  )
}
