import { createSlice } from '@reduxjs/toolkit'
import { type EditableProfileSchema } from '../types/EditableProfile'

const initialState: EditableProfileSchema = {
  isLoading: false,
  readonly: true,
  data: undefined,
  error: undefined
}

export const editableProfileSlice = createSlice({
  name: 'editableProfile',
  reducers: {},
  initialState
})

export const { reducer: editableProfileReducer } = editableProfileSlice
// export const { actions: editableProfileActions } = editableProfileSlice
