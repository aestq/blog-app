import { type ReducersMapObject } from '@reduxjs/toolkit'
import { type Story } from '@storybook/react'
import { type StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { articleDetailsPageReducer } from 'pages/ArticleDetailsPage/model/slice'
import { addCommentFormReducer } from 'features/AddCommentForm/model/slice/addCommentFormSlice'
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice'
import { editableProfileReducer } from 'features/EditableProfile/model/slice/editableProfileSlice'
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice'
import { type ReducersList } from 'shared/lib/hooks/useReducersLoader'

const defaultReducers: ReducersList = {
  loginForm: loginReducer,
  editableProfile: editableProfileReducer,
  articleDetails: articleDetailsReducer,
  articleDetailsPage: articleDetailsPageReducer,
  addCommentForm: addCommentFormReducer
}

export const StoreDecorator = (
  initialState: DeepPartial<StateSchema>,
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
) => {
  return (StoryComponent: Story) => (
    <StoreProvider
      initialState={initialState}
      asyncReducers={{ ...defaultReducers, ...asyncReducers }}
    >
      <StoryComponent />
    </StoreProvider>
  )
}
