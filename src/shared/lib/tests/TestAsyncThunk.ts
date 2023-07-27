import { type AsyncThunkAction, type Dispatch } from '@reduxjs/toolkit'
import axios, { type AxiosStatic } from 'axios'
import { type StateSchema } from 'app/providers/StoreProvider'

jest.mock('axios')

type ActionCreateType<Return, Args, RejectedValue> = (args: Args)
=> AsyncThunkAction<Return, Args, { rejectValue: RejectedValue }>

export class TestAsyncThunk<Return, Args, RejectedValue> {
  dispatch: Dispatch
  getState: () => StateSchema
  api: jest.MockedFunctionDeep<AxiosStatic>
  actionCreate: ActionCreateType<Return, Args, RejectedValue>

  constructor(
    actionCreate: ActionCreateType<Return, Args, RejectedValue>,
    state?: DeepPartial<StateSchema>
  ) {
    this.actionCreate = actionCreate
    this.dispatch = jest.fn()
    this.getState = jest.fn(() => state as StateSchema)
    this.api = jest.mocked(axios, true)
  }

  async callThunk(args: Args) {
    const action = this.actionCreate(args)
    const result = await action(this.dispatch, this.getState, { api: this.api })
    return result
  }
}
