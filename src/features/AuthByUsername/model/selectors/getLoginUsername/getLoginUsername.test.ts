import { type DeepPartial } from 'redux'
import { type StateSchema } from 'app/providers/StoreProvider'
import { getLoginUsername } from './getLoginUsername'

describe('getLoginUsername', () => {
  test('should return loginForm username', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: 'user'
      }
    }
    expect(getLoginUsername(state as StateSchema)).toBe('user')
  })

  test('work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getLoginUsername(state as StateSchema)).toEqual('')
  })
})
