import { type DeepPartial } from '@reduxjs/toolkit'
import { type LoginSchema } from '../types/loginSchema'
import { loginActions, loginReducer } from './loginSlice'

describe('loginSlice', () => {
  test('setUsername', () => {
    const state: DeepPartial<LoginSchema> = {
      username: 'user'
    }
    expect(loginReducer(state as LoginSchema, loginActions.setUsername('123')))
      .toEqual({ username: '123' })
  })

  test('setPassword', () => {
    const state: DeepPartial<LoginSchema> = {
      password: '1234'
    }
    expect(loginReducer(state as LoginSchema, loginActions.setPassword('12345678')))
      .toEqual({ password: '12345678' })
  })
})
