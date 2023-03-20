import { classNames } from './classNames'

describe('classNames', () => {
  test('with first param', () => {
    expect(classNames('someClass')).toBe('someClass')
  })

  test('with additional class', () => {
    const expected = 'someClass className1 className2'
    expect(classNames('someClass', {}, ['className1', 'className2'])).toBe(expected)
  })

  test('with mods', () => {
    const expected = 'someClass className1 className2 hovered collapsed'
    expect(classNames(
      'someClass', { hovered: true, collapsed: true }, ['className1', 'className2']
    )).toBe(expected)
  })

  test('with mods false', () => {
    const expected = 'someClass className1 className2 hovered'
    expect(classNames(
      'someClass', { hovered: true, collapsed: false }, ['className1', 'className2']
    )).toBe(expected)
  })

  test('with mods undefined', () => {
    const expected = 'someClass className1 className2 hovered'
    expect(classNames(
      'someClass', { hovered: true, collapsed: undefined }, ['className1', 'className2']
    )).toBe(expected)
  })
})
