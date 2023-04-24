import axios from 'axios'
import { loginByUsername } from './loginByUsername'
import { type User, userActions } from 'entities/User'
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk'

jest.mock('axios')
const mockedAxios = jest.mocked(axios, true)

describe('loginByUsername', () => {
  test('fulfilled login', async () => {
    const userData: User = { username: 'admin', id: 1 }
    mockedAxios.post.mockReturnValue(Promise.resolve({ data: userData }))
    const thunk = new TestAsyncThunk(loginByUsername)
    const result = await thunk.callThunk({ username: 'admin', password: '12345678' })
    expect(thunk.dispatch).toBeCalledWith(userActions.setAuthData(userData))
    expect(thunk.dispatch).toHaveBeenCalledTimes(3)
    expect(mockedAxios.post).toHaveBeenCalled()
    expect(result.payload).toEqual(userData)
    expect(result.meta.requestStatus).toBe('fulfilled')
  })

  test('rejected login', async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }))
    const thunk = new TestAsyncThunk(loginByUsername)
    const result = await thunk.callThunk({ username: 'admin', password: '12345678' })
    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    expect(mockedAxios.post).toHaveBeenCalled()
    expect(result.payload).toBe('Вы ввели неверный логин или пароль')
    expect(result.meta.requestStatus).toBe('rejected')
  })
})
