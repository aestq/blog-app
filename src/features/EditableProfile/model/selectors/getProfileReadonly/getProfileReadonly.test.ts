import { type StateSchema } from 'app/providers/StoreProvider'
import { getProfileReadonly } from './getProfileReadonly'

describe('getProfileReadonly', () => {
  test('should return readonly value', () => {
    const state: DeepPartial<StateSchema> = {
      editableProfile: {
        readonly: false
      }
    }
    expect(getProfileReadonly(state as StateSchema)).toBe(false)
  })

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {
      editableProfile: {}
    }
    expect(getProfileReadonly(state as StateSchema)).toEqual(true)
  })
})
