import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import { type Profile } from 'entities/Profile'
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk'
import { ValidateProfileError } from '../../types/EditableProfileSchema'
import { updateProfileData } from './updateProfileData'

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

describe('updateProfileData', () => {
  test('fulfilled update', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      editableProfile: {
        form: profileData
      }
    })
    thunk.api.put.mockReturnValue(Promise.resolve({ data: profileData }))

    const result = await thunk.callThunk()

    expect(thunk.api.put).toHaveBeenCalled()
    expect(result.payload).toEqual(profileData)
    expect(result.meta.requestStatus).toBe('fulfilled')
  })

  test('rejected update', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      editableProfile: {
        form: profileData
      }
    })
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }))

    const result = await thunk.callThunk()

    expect(thunk.api.put).toHaveBeenCalled()
    expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR])
    expect(result.meta.requestStatus).toBe('rejected')
  })

  test('validate error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      editableProfile: {
        form: { ...profileData, firstName: '', age: undefined }
      }
    })
    const result = await thunk.callThunk()

    expect(thunk.api.put).toBeCalledTimes(0)
    expect(result.payload).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_AGE
    ])
    expect(result.meta.requestStatus).toBe('rejected')
  })
})
