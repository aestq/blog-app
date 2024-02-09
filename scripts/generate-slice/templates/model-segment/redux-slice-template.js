const firstCharUpperCase = require('../../firstCharUpperCase')

module.exports = (sliceName) => {
  const typeName = `${firstCharUpperCase(sliceName)}Schema`

  return `import { createSlice } from '@reduxjs/toolkit'
import { type ${typeName} } from '../types/${typeName}'

const initialState: ${typeName} = {
  data: undefined,
  isLoading: false,
  error: undefined
}

const ${sliceName}Slice = createSlice({
  name: '${sliceName}',
  reducers: {},
  initialState
  // extraReducers: (builder) => {
  //   builder.addCase(fetch.fulfilled, (state, action: PayloadAction<T>) => {
  //     state.data = action.payload
  //     state.isLoading = false
  //   })
  //   builder.addCase(fetch.pending, (state) => {
  //     state.isLoading = true
  //     state.error = undefined
  //   })
  //   builder.addCase(fetch.rejected, (state, action) => {
  //     state.error = action.payload
  //     state.isLoading = false
  //   })
  // }
})

export const { reducer: ${sliceName}Reducer } = ${sliceName}Slice
export const { actions: ${sliceName}Actions } = ${sliceName}Slice`
}
