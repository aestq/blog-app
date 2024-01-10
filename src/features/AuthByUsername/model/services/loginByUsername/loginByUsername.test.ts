import { type User, userActions } from 'entities/User'
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk'
import { loginByUsername } from './loginByUsername'

describe('loginByUsername', () => {
  test('fulfilled login', async () => {
    const userData: User = { username: 'admin', id: '1' }
    const thunk = new TestAsyncThunk(loginByUsername)
    thunk.api.post.mockReturnValue(Promise.resolve({ data: userData }))
    const result = await thunk.callThunk({ username: 'admin', password: '12345678' })
    expect(thunk.dispatch).toBeCalledWith(userActions.setAuthData(userData))
    expect(thunk.dispatch).toHaveBeenCalledTimes(3)
    expect(thunk.api.post).toHaveBeenCalled()
    expect(result.payload).toEqual(userData)
    expect(result.meta.requestStatus).toBe('fulfilled')
  })

  test('rejected login', async () => {
    const thunk = new TestAsyncThunk(loginByUsername)
    thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }))
    const result = await thunk.callThunk({ username: 'admin', password: '12345678' })
    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    expect(thunk.api.post).toHaveBeenCalled()
    expect(result.payload).toBe('Вы ввели неверный логин или пароль')
    expect(result.meta.requestStatus).toBe('rejected')
  })
})
