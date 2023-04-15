import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { type User, userActions } from 'entities/User'
import i18n from 'shared/config/i18n/i18n'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage'

interface LoginByUsernameProps {
  username: string
  password: string
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, { rejectValue: string }>(
  'login/loginByUsername',
  async (authData, thunkAPI) => {
    const { rejectWithValue, dispatch } = thunkAPI
    try {
      const response = await axios.post<User>('http://localhost:8000/login', authData)

      if(!response.data) {
        throw new Error('No data')
      }

      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
      dispatch(userActions.setAuthData(response.data))

      return response.data
    } catch (error) {
      console.log(error)
      return rejectWithValue(i18n.t('Вы ввели неверный логин или пароль'))
    }
  }
)