import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { type Profile } from 'entities/Profile'
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm'
import { ValidateProfileError } from '../../types/EditableProfileSchema'
import { validateProfileData } from '../validateProfileData/validateProfileData'

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<ValidateProfileError[]>>(
  'editableProfile/updateProfileData',
  async (_, thunkAPI) => {
    const { rejectWithValue, extra, getState } = thunkAPI
    const formData = getProfileForm(getState())
    const errors = validateProfileData(formData)

    if(errors.length) {
      return rejectWithValue(errors)
    }

    try {
      const response = await extra.api.put<Profile>('/profiles', formData)

      if(!response.data) {
        throw new Error('No data')
      }

      return response.data
    } catch {
      return rejectWithValue([ValidateProfileError.SERVER_ERROR])
    }
  }
)
