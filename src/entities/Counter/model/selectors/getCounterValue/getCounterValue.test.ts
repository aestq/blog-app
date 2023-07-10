import { type StateSchema } from 'app/providers/StoreProvider'
import { getCounterValue } from './getCounterValue'

describe('getCounter', () => {
  test('should return counter value', () => {
    const state: DeepPartial<StateSchema> = {
      counter: { value: 7 }
    }
    expect(getCounterValue(state as StateSchema)).toBe(7)
  })
})
