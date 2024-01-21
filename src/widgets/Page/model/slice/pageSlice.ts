import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type PageSchema } from '../types/pageSchema'

const initialState: PageSchema = {
  scroll: {}
}

const pageSliceSlice = createSlice({
  name: 'pageSlice',
  initialState,
  reducers: {
    setScrollPosition: (state, action: PayloadAction<{ path: string, position: number }>) => {
      state.scroll[action.payload.path] = action.payload.position
    }
  }
})

export const { reducer: pageReducer } = pageSliceSlice
export const { actions: pageActions } = pageSliceSlice
