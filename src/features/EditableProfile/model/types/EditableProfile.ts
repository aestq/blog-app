import { type Profile } from 'entities/Profile'

export interface EditableProfileSchema {
  data?: Profile
  isLoading: boolean
  error?: string
  readonly: boolean
}
