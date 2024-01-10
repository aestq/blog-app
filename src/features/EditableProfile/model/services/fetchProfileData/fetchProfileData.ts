import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { type Profile } from 'entities/Profile'

export const fetchProfileData = createAsyncThunk<Profile, string, ThunkConfig<string>>(
  'editableProfile/fetchProfileData',
  async (profileId, thunkAPI) => {
    const { rejectWithValue, extra } = thunkAPI
    try {
      const response = await extra.api.get<Profile>(`/profiles/${profileId}`)

      if(!response.data) {
        throw new Error('No data')
      }

      return response.data
    } catch (error) {
      return rejectWithValue('error')
    }
  }
)
