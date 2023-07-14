import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { type Profile } from 'entities/Profile'
import { getProfileForm } from '../selectors/getProfileForm/getProfileForm'

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
  'editableProfile/updateProfileData',
  async (_, thunkAPI) => {
    const { rejectWithValue, extra, getState } = thunkAPI

    const formData = getProfileForm(getState())

    try {
      const response = await extra.api.put<Profile>('/profiles', formData)
      return response.data
    } catch (error) {
      return rejectWithValue('error')
    }
  }
)
