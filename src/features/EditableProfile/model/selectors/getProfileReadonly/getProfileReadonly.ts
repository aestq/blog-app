import { type StateSchema } from 'app/providers/StoreProvider'

export const getProfileReadonly = (state: StateSchema) => state.editableProfile?.readonly ?? true
