import { type FormEvent, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { type ReducersList, useReducersLoader } from 'shared/lib/hooks/useReducersLoader'
import { Button } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { Text } from 'shared/ui/Text/Text'
import { getAddCommentFormError, getAddCommentFormText } from '../model/selectors/addCommentForm'
import { addCommentFormActions, addCommentFormReducer } from '../model/slice/addCommentFormSlice'
import cls from './AddCommentForm.module.scss'

export interface AddCommentFormProps {
  className?: string
  onSendComment: (text: string) => void
}

const reducersList: ReducersList = {
  addCommentForm: addCommentFormReducer
}

const AddCommentForm = memo((props: AddCommentFormProps) => {
  useReducersLoader({ reducersList, removeAfterUnmount: true })
  const { className, onSendComment } = props
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const text = useSelector(getAddCommentFormText)
  const error = useSelector(getAddCommentFormError)

  const onChangeText = useCallback((value: string) => {
    dispatch(addCommentFormActions.setText(value))
  }, [dispatch])

  const onSubmit = (event: FormEvent) => {
    event.preventDefault()
    onChangeText('')
    onSendComment(text)
  }

  return (
    <form onSubmit={onSubmit} className={classNames(cls.AddCommentForm, {}, [className])}>
      {error && (
        <Text text={t('При добавлении комментария произошла ошибка')} theme='error' />
      )}
      <Input
        className={cls.input}
        placeholder={t('Введите текст комментария')}
        value={text}
        onChange={onChangeText}
      />
      <Button
        theme='outline'
      >
        {t('Отправить')}
      </Button>
    </form>
  )
})

AddCommentForm.displayName = 'AddCommentForm'

export default AddCommentForm
