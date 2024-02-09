const firstCharUpperCase = require('../../firstCharUpperCase')

module.exports = (sliceName) => {
  return `import { type StateSchema } from 'app/providers/StoreProvider'

export const get${firstCharUpperCase(sliceName)}Data = (state: StateSchema) => state.${sliceName}?.data
export const get${firstCharUpperCase(sliceName)}IsLoading = (state: StateSchema) => state.${sliceName}?.isLoading ?? false
export const get${firstCharUpperCase(sliceName)}Error = (state: StateSchema) => state.${sliceName}?.error`
}
