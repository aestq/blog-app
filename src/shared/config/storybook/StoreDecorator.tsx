import { type Story } from '@storybook/react'
import { type StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { type DeepPartial } from 'redux'

export const StoreDecorator = (initialState: DeepPartial<StateSchema>) => {
  return (StoryComponent: Story) => (
    <StoreProvider initialState={initialState}>
      <StoryComponent />
    </StoreProvider>
  )
}
