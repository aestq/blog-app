import { type StateSchema } from 'app/providers/StoreProvider'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import { type Profile } from 'entities/Profile'
import { getProfileData } from './getProfileData'

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

describe('getProfileData', () => {
  test('should return profile data', () => {
    const state: DeepPartial<StateSchema> = {
      editableProfile: {
        data: profileData
      }
    }
    expect(getProfileData(state as StateSchema)).toEqual(profileData)
  })

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {
      editableProfile: {}
    }
    expect(getProfileData(state as StateSchema)).toEqual(undefined)
  })
})
