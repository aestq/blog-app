import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type LoginSchema } from '../types/loginSchema'
import { loginByUsername } from '../services/loginByUsername/loginByUsername'

const initialState: LoginSchema = {
  username: '',
  password: '',
  isLoading: false
}

export const loginSlice = createSlice({
  name: 'login',
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload
    }
  },
  initialState,
  extraReducers: (builder) => {
    builder.addCase(loginByUsername.fulfilled, (state) => {
      state.isLoading = false
    })
    builder.addCase(loginByUsername.pending, (state) => {
      state.isLoading = true
      state.error = undefined
    })
    builder.addCase(loginByUsername.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload
    })
  }
})

export const { reducer: loginReducer } = loginSlice
export const { actions: loginActions } = loginSlice
