import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type Profile } from 'entities/Profile'
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData'
import { updateProfileData } from '../services/updateProfileData/updateProfileData'
import { type EditableProfileSchema } from '../types/EditableProfileSchema'

const initialState: EditableProfileSchema = {
  isLoading: false,
  readonly: true,
  data: undefined,
  error: undefined,
  validateErrors: undefined
}

const editableProfileSlice = createSlice({
  name: 'editableProfile',
  reducers: {
    setReadonly: (state, action: PayloadAction<boolean>) => {
      state.readonly = action.payload
    },
    cancelEdit: (state) => {
      state.readonly = true
      state.form = state.data
      state.validateErrors = undefined
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
      state.validateErrors = undefined
    })
    builder.addCase(updateProfileData.fulfilled, (state, action) => {
      state.isLoading = false
      state.data = action.payload
      state.form = action.payload
      state.readonly = true
      state.validateErrors = undefined
    })
    builder.addCase(updateProfileData.rejected, (state, action) => {
      state.isLoading = false
      state.validateErrors = action.payload
    })
  }
})

export const { reducer: editableProfileReducer } = editableProfileSlice
export const { actions: editableProfileActions } = editableProfileSlice
