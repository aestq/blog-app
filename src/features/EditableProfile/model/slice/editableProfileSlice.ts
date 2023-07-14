import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type Profile } from 'entities/Profile'
import { fetchProfileData } from '../services/fetchProfileData'
import { updateProfileData } from '../services/updateProfileData'
import { type EditableProfileSchema } from '../types/EditableProfile'

const initialState: EditableProfileSchema = {
  isLoading: false,
  readonly: true,
  data: undefined,
  error: undefined
}

export const editableProfileSlice = createSlice({
  name: 'editableProfile',
  reducers: {
    setReadonly: (state, action: PayloadAction<boolean>) => {
      state.readonly = action.payload
    },
    cancelEdit: (state) => {
      state.readonly = true
      state.form = state.data
    },
    updateForm: (state, action: PayloadAction<Profile>) => {
      state.form = { ...state.form, ...action.payload }
    }
  },
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProfileData.pending, (state) => {
      state.isLoading = true
      state.error = undefined
    })
    builder.addCase(fetchProfileData.fulfilled, (state, action) => {
      state.isLoading = false
      state.data = action.payload
      state.form = action.payload
    })
    builder.addCase(fetchProfileData.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload
    })
    builder.addCase(updateProfileData.pending, (state) => {
      state.isLoading = true
      state.error = undefined
    })
    builder.addCase(updateProfileData.fulfilled, (state, action) => {
      state.isLoading = false
      state.data = action.payload
      state.form = action.payload
      state.readonly = true
    })
    builder.addCase(updateProfileData.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload
    })
  }
})

export const { reducer: editableProfileReducer } = editableProfileSlice
export const { actions: editableProfileActions } = editableProfileSlice
