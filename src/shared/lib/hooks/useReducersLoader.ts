import { type Reducer } from '@reduxjs/toolkit'
import { useEffect } from 'react'
import { useStore } from 'react-redux'
import { type ReduxStoreWithManager } from 'app/providers/StoreProvider'
import { type StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer
}

interface Options {
  reducersList: ReducersList
  removeAfterUnmount?: boolean
}

export function useReducersLoader(options: Options) {
  const { reducersList, removeAfterUnmount = false } = options
  const store = useStore() as ReduxStoreWithManager
  const dispatch = useAppDispatch()

  useEffect(() => {
    const mountedReducers = store.reducerManager.getReducerMap()

    Object.entries(reducersList).forEach(([key, reducer]) => {
      const mounted = mountedReducers[key as StateSchemaKey]

      if(mounted !== reducer) {
        store.reducerManager.add(key as StateSchemaKey, reducer)
        dispatch({ type: `@INIT ${key} reducer` })
      }
    })

    return () => {
      if(removeAfterUnmount) {
        Object.entries(reducersList).forEach(([key]) => {
          store.reducerManager.remove(key as StateSchemaKey)
          dispatch({ type: `@DESTROY ${key} reducer` })
        })
      }
    }
  }, [dispatch, reducersList, removeAfterUnmount, store.reducerManager])
}
