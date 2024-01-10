import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type AddCommentFormSchema } from '../types/addCommentFormSchema'

const initialState: AddCommentFormSchema = {
  text: '',
  error: undefined
}

const addCommentFormSliceSlice = createSlice({
  name: 'addCommentFormSlice',
  reducers: {
    setText(state, action: PayloadAction<string>) {
      state.text = action.payload
    }
  },
  initialState
})

export const { reducer: addCommentFormReducer } = addCommentFormSliceSlice
export const { actions: addCommentFormActions } = addCommentFormSliceSlice
