import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { type Profile } from 'entities/Profile'

export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
  'editableProfile/fetchProfileData',
  async (_, thunkAPI) => {
    const { rejectWithValue, extra } = thunkAPI
    try {
      const response = await extra.api.get<Profile>('/profiles')
      return response.data
    } catch (error) {
      return rejectWithValue('error')
    }
  }
)
