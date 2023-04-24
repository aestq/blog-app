import { type AsyncThunkAction, type Dispatch } from '@reduxjs/toolkit'
import { type StateSchema } from 'app/providers/StoreProvider'

type ActionCreateType<Return, Args, RejectedValue> = (args: Args)
=> AsyncThunkAction<Return, Args, { rejectValue: RejectedValue }>

export class TestAsyncThunk<Return, Args, RejectedValue> {
  dispatch: Dispatch
  getState: () => StateSchema
  actionCreate: ActionCreateType<Return, Args, RejectedValue>

  constructor(actionCreate: ActionCreateType<Return, Args, RejectedValue>) {
    this.actionCreate = actionCreate
    this.dispatch = jest.fn()
    this.getState = jest.fn()
  }

  async callThunk(args: Args) {
    const action = this.actionCreate(args)
    const result = await action(this.dispatch, this.getState, undefined)
    return result
  }
}
