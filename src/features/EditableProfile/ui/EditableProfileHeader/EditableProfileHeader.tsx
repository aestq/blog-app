import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { Button } from 'shared/ui/Button/Button'
import { HStack } from 'shared/ui/Stack/HStack'
import { Text } from 'shared/ui/Text/Text'
import { getCanEditProfile } from '../../model/selectors/getCanEditProfile/getCanEditProfile'
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly'
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData'
import { editableProfileActions } from '../../model/slice/editableProfileSlice'
import cls from './EditableProfileHeader.module.scss'

interface EditableProfileHeaderProps {
  className?: string
}

export const EditableProfileHeader = (props: EditableProfileHeaderProps) => {
  const { className } = props
  const { t } = useTranslation('profile')
  const readonly = useSelector(getProfileReadonly)
  const dispatch = useAppDispatch()
  const isCanEdit = useSelector(getCanEditProfile)

  const onClickEdit = useCallback(() => {
    dispatch(editableProfileActions.setReadonly(false))
  }, [dispatch])

  const onClickCancel = useCallback(() => {
    dispatch(editableProfileActions.cancelEdit())
  }, [dispatch])

  const onClickSave = useCallback(() => {
    dispatch(updateProfileData())
  }, [dispatch])

  return (
    <HStack as='header' className={classNames(cls.EditableProfileHeader, {}, [className])}>
      <Text title={t('Профиль')} />
      {isCanEdit && (
        <>
          {readonly
            ? (
              <Button
                className={cls.editButton}
                theme='outline'
                onClick={onClickEdit}
              >
                {t('Редактировать')}
              </Button>
              )
            : (
              <>
                <Button
                  className={cls.cancelButton}
                  theme='outlineRed'
                  onClick={onClickCancel}
                >
                  {t('Отменить')}
                </Button>
                <Button
                  theme='outline'
                  onClick={onClickSave}
                >
                  {t('Сохранить')}
                </Button>
              </>
              )
          }
        </>
      )}
    </HStack>
  )
}
