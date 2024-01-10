import { type StateSchema } from 'app/providers/StoreProvider'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import { type Profile } from 'entities/Profile'
import { getCanEditProfile } from './getCanEditProfile'

const profileData: Profile = {
  id: '1',
  avatar: 'avatar link',
  firstName: 'asdf',
  lastName: 'msnhjd',
  age: 20,
  country: Country.RUSSIA,
  username: 'user',
  currency: Currency.RUB,
  city: 'Moscow'
}

describe('getCanEditProfile', () => {
  test('should return true', () => {
    const state: DeepPartial<StateSchema> = {
      editableProfile: {
        data: profileData
      },
      user: {
        authData: { id: '1' }
      }
    }
    expect(getCanEditProfile(state as StateSchema)).toBe(true)
  })

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getCanEditProfile(state as StateSchema)).toEqual(false)
  })
})
