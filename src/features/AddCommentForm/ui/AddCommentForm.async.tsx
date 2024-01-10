import { type FC, lazy } from 'react'
import { type AddCommentFormProps } from './AddCommentForm'

export const AddCommentFormAsync = lazy<FC<AddCommentFormProps>>(async () => await new Promise((resolve) => {
  setTimeout(() => {
    // eslint-disable-next-line @typescript-eslint/prefer-ts-expect-error
    // @ts-ignore
    resolve(import('./AddCommentForm'))
  }, 1500)
}))
