import { type EnhancedStore, type Reducer, type ReducersMapObject } from '@reduxjs/toolkit'
import { type AxiosInstance } from 'axios'
import { type AnyAction, type CombinedState } from 'redux'
import { type LoginSchema } from 'features/AuthByUsername'
import { type EditableProfileSchema } from 'features/EditableProfile'
import { type ArticleDetailsSchema } from 'entities/Article'
import { type CounterSchema } from 'entities/Counter'
import { type UserSchema } from 'entities/User'

export interface StateSchema {
  counter: CounterSchema
  user: UserSchema

  // Асинхронные Reducers
  loginForm?: LoginSchema
  editableProfile?: EditableProfileSchema
  articleDetails?: ArticleDetailsSchema
}

export type StateSchemaKey = keyof StateSchema

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
  add: (key: StateSchemaKey, reducer: Reducer) => void
  remove: (key: StateSchemaKey) => void
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager
}

interface ThunkExtraArgs {
  api: AxiosInstance
}

export interface ThunkConfig<T> {
  extra: ThunkExtraArgs
  rejectValue: T
  state: StateSchema
}
