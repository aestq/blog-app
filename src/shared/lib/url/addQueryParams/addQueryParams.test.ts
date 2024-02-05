import { getQueryParams } from './addQueryParams'

describe('getQueryParams', () => {
  test('with one param', () => {
    const params = getQueryParams({
      test: 'value'
    })
    expect(params).toBe('?test=value')
  })

  test('with multiple params', () => {
    const params = getQueryParams({
      first: 'value1',
      second: 'value2',
      third: 'value3'
    })
    expect(params).toBe('?first=value1&second=value2&third=value3')
  })

  test('with undefined', () => {
    const params = getQueryParams({
      first: undefined
    })
    expect(params).toBe('?')
  })
})
