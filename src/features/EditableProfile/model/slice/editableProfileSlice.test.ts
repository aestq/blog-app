import { type DeepPartial } from '@reduxjs/toolkit'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import { type Profile } from 'entities/Profile'
import { updateProfileData } from '../services/updateProfileData/updateProfileData'
import { type EditableProfileSchema, ValidateProfileError } from '../types/EditableProfileSchema'
import { editableProfileActions, editableProfileReducer } from './editableProfileSlice'

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

describe('editableProfileSlice', () => {
  test('setReadonly', () => {
    const state: DeepPartial<EditableProfileSchema> = {
      readonly: true
    }
    expect(editableProfileReducer(
      state as EditableProfileSchema,
      editableProfileActions.setReadonly(false))
    ).toEqual({ readonly: false })
  })

  test('cancelEdit', () => {
    const state: DeepPartial<EditableProfileSchema> = {
      readonly: false,
      data: profileData,
      form: { username: '' }
    }
    expect(editableProfileReducer(
      state as EditableProfileSchema,
      editableProfileActions.cancelEdit())
    ).toEqual({
      data: profileData,
      readonly: true,
      validateErrors: undefined,
      form: profileData
    })
  })

  test('update form profile', () => {
    const state: DeepPartial<EditableProfileSchema> = {
      form: {
        username: '123'
      }
    }
    expect(editableProfileReducer(
      state as EditableProfileSchema,
      editableProfileActions.updateForm({ username: 'admin' }))
    ).toEqual({ form: { username: 'admin' } })
  })

  test('update profile service pending', () => {
    const state: DeepPartial<EditableProfileSchema> = {
      isLoading: false,
      validateErrors: [ValidateProfileError.SERVER_ERROR]
    }
    expect(editableProfileReducer(
      state as EditableProfileSchema,
      updateProfileData.pending
    )).toEqual({ isLoading: true, validateErrors: undefined })
  })

  test('update profile service fulfilled', () => {
    const state: DeepPartial<EditableProfileSchema> = {
      isLoading: true
    }
    expect(editableProfileReducer(
      state as EditableProfileSchema,
      updateProfileData.fulfilled(profileData, '')
    )).toEqual({
      isLoading: false,
      validateErrors: undefined,
      readonly: true,
      form: profileData,
      data: profileData
    })
  })
})
