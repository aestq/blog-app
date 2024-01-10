import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import { type Profile } from 'entities/Profile'
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk'
import { fetchProfileData } from './fetchProfileData'

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

describe('fetchProfileData', () => {
  test('fulfilled fetch', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData)
    thunk.api.get.mockReturnValue(Promise.resolve({ data: profileData }))

    const result = await thunk.callThunk('1')

    expect(thunk.api.get).toHaveBeenCalled()
    expect(result.payload).toEqual(profileData)
    expect(result.meta.requestStatus).toBe('fulfilled')
  })

  test('rejected fetch', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData)
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }))

    const result = await thunk.callThunk('1')

    expect(thunk.api.get).toHaveBeenCalled()
    expect(result.payload).toBe('error')
    expect(result.meta.requestStatus).toBe('rejected')
  })
})
