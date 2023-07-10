import { createSlice } from '@reduxjs/toolkit'
import { fetchProfileData } from '../services/fetchProfileData'
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
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProfileData.pending, (state) => {
      state.isLoading = true
      state.error = undefined
    })
    builder.addCase(fetchProfileData.fulfilled, (state, action) => {
      state.isLoading = false
      state.data = action.payload
    })
    builder.addCase(fetchProfileData.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload
    })
  }
})

export const { reducer: editableProfileReducer } = editableProfileSlice
// export const { actions: editableProfileActions } = editableProfileSlice
