import { type StateSchema } from 'app/providers/StoreProvider'
import { getProfileError } from './getProfileError'

describe('getProfileError', () => {
  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      editableProfile: {
        error: 'error'
      }
    }
    expect(getProfileError(state as StateSchema)).toBe('error')
  })

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {
      editableProfile: {}
    }
    expect(getProfileError(state as StateSchema)).toEqual(undefined)
  })
})
