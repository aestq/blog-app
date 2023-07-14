import { type ReducersMapObject } from '@reduxjs/toolkit'
import { type Story } from '@storybook/react'
import { type StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice'
import { editableProfileReducer } from 'features/EditableProfile/model/slice/editableProfileSlice'
import { type ReducersList } from 'shared/lib/hooks/useReducersLoader'

const defaultReducers: ReducersList = {
  loginForm: loginReducer,
  editableProfile: editableProfileReducer
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
