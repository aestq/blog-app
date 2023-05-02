import { classNames } from 'shared/lib/classNames/classNames'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader'
import { editableProfileReducer } from '../model/slice/EditableProfileSlice'
import cls from './EditableProfile.module.scss'
import { useTranslation } from 'react-i18next'

const reducers: ReducersList = {
  editableProfile: editableProfileReducer
}

interface EditableProfileProps {
  className?: string
}

export const EditableProfile = (props: EditableProfileProps) => {
  const { className } = props
  const { t } = useTranslation()

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(cls.EditableProfile, {}, [className])}>
        {t('EditableProfile features')}
      </div>
    </DynamicModuleLoader>
  )
}
