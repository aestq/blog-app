import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import { type Profile } from 'entities/Profile'
import { ValidateProfileError } from '../../types/EditableProfileSchema'
import { validateProfileData } from './validateProfileData'

const profileData: Profile = {
  avatar: 'avatar link',
  firstName: 'asdf',
  lastName: 'msnhjd',
  age: 20,
  country: Country.RUSSIA,
  username: 'user',
  currency: Currency.RUB,
  city: 'Moscow'
}

describe('validateProfileData', () => {
  test('success', () => {
    const result = validateProfileData(profileData)
    expect(result).toEqual([])
  })

  test('without first and last name', () => {
    const result = validateProfileData({
      ...profileData, firstName: '', lastName: ''
    })
    expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA])
  })

  test('incorrect age', () => {
    const result = validateProfileData({
      ...profileData, age: undefined
    })
    expect(result).toEqual([ValidateProfileError.INCORRECT_AGE])
  })

  test('incorrect country', () => {
    const result = validateProfileData({
      ...profileData, country: undefined
    })
    expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY])
  })

  test('incorrect all', () => {
    const result = validateProfileData({})
    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_COUNTRY
    ])
  })
})
