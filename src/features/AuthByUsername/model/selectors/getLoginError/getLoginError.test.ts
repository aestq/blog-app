import { type DeepPartial } from 'redux'
import { type StateSchema } from 'app/providers/StoreProvider'
import { getLoginError } from './getLoginError'

describe('getLoginError', () => {
  test('should return loginForm error', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        isLoading: false,
        error: 'error',
        username: '',
        password: ''
      }
    }
    expect(getLoginError(state as StateSchema)).toEqual('error')
  })

  test('work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getLoginError(state as StateSchema)).toEqual(undefined)
  })
})
