import { type StateSchema } from 'app/providers/StoreProvider'
import { ValidateProfileError } from '../../types/EditableProfileSchema'
import { getProfileValidateErrors } from './getProfileValidateErrors'

describe('getProfileReadonly', () => {
  test('should return array of validate errors', () => {
    const state: DeepPartial<StateSchema> = {
      editableProfile: {
        validateErrors: [
          ValidateProfileError.INCORRECT_USER_DATA,
          ValidateProfileError.SERVER_ERROR
        ]
      }
    }
    expect(getProfileValidateErrors(state as StateSchema)).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.SERVER_ERROR
    ])
  })

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {
      editableProfile: {}
    }
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined)
  })
})
