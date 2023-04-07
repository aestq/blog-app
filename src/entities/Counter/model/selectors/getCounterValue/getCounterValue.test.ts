import { getCounterValue } from './getCounterValue'
import { type DeepPartial } from 'redux'
import { type StateSchema } from 'app/providers/StoreProvider'

describe('getCounter', () => {
  test('should return counter value', () => {
    const state: DeepPartial<StateSchema> = {
      counter: { value: 7 }
    }
    expect(getCounterValue(state as StateSchema)).toBe(7)
  })
})
