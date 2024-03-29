import { type Profile } from 'entities/Profile'

export enum ValidateProfileError {
  INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
  INCORRECT_AGE = 'INCORRECT_AGE',
  INCORRECT_COUNTRY = 'INCORRECT_COUNTRY',
  SERVER_ERROR = 'SERVER ERROR',
  NO_DATA = 'NO_DATA'
}

export interface EditableProfileSchema {
  data?: Profile
  form?: Profile
  isLoading: boolean
  error?: string
  readonly: boolean
  validateErrors?: ValidateProfileError[]
}
