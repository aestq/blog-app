import { type StateSchema } from 'app/providers/StoreProvider'
import { getProfileIsLoading } from './getProfileIsLoading'

describe('getProfileIsLoading', () => {
  test('should return isLoading', () => {
    const state: DeepPartial<StateSchema> = {
      editableProfile: {
        isLoading: true
      }
    }
    expect(getProfileIsLoading(state as StateSchema)).toBe(true)
  })

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {
      editableProfile: {}
    }
    expect(getProfileIsLoading(state as StateSchema)).toEqual(false)
  })
})
