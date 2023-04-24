import { type DeepPartial } from '@reduxjs/toolkit'
import { loginActions, loginReducer } from './loginSlice'
import { type LoginSchema } from '../types/loginSchema'

describe('loginSlice', () => {
  test('setUsername', () => {
    const state: DeepPartial<LoginSchema> = {
      username: 'user'
    }
    expect(loginReducer(state as LoginSchema, loginActions.setUsername('123')))
      .toEqual({ username: 'user123' })
  })

  test('setPassword', () => {
    const state: DeepPartial<LoginSchema> = {
      password: '1234'
    }
    expect(loginReducer(state as LoginSchema, loginActions.setPassword('5678')))
      .toEqual({ password: '12345678' })
  })
})
