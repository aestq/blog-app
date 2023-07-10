import { type CounterSchema } from '../types/counterSchema'
import { counterReducer, counterActions } from './counterSlice'

describe('counterSlice', () => {
  test('increment counter', () => {
    const state: CounterSchema = {
      value: 7
    }
    expect(counterReducer(state, counterActions.increment()))
      .toEqual({ value: 8 })
  })

  test('decrement counter', () => {
    const state: CounterSchema = {
      value: 7
    }
    expect(counterReducer(state, counterActions.decrement()))
      .toEqual({ value: 6 })
  })

  test('should work with undefined', () => {
    expect(counterReducer(undefined, counterActions.increment()))
      .toEqual({ value: 1 })
  })
})
