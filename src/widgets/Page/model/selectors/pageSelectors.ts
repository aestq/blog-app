import { createSelector } from 'reselect'
import { type StateSchema } from 'app/providers/StoreProvider'

export const getPageScroll = (state: StateSchema) => state.page.scroll
export const getPageScrollByPath = createSelector(
  getPageScroll,
  (state: StateSchema, path: string) => path,
  (scroll, path) => scroll[path] ?? 0
)
