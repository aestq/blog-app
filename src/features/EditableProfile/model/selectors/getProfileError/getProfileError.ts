import { type StateSchema } from 'app/providers/StoreProvider'

export const getProfileError = (state: StateSchema) => state.editableProfile?.error