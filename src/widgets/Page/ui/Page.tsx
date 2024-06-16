import { type MutableRefObject, type ReactNode, type UIEvent, useRef } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { type StateSchema } from 'app/providers/StoreProvider'
import { classNames } from 'shared/lib/classNames/classNames'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect'
import { useThrottle } from 'shared/lib/hooks/useThrottle'
import { getPageScrollByPath } from '../model/selectors/pageSelectors'
import { pageActions } from '../model/slice/pageSlice'
import cls from './Page.module.scss'

interface PageProps {
  className?: string
  children?: ReactNode
  onScrollEnd?: () => void
}

export const Page = (props: PageProps) => {
  const { className, children, onScrollEnd } = props
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>
  const containerRef = useRef() as MutableRefObject<HTMLDivElement>
  const dispatch = useAppDispatch()
  const { pathname } = useLocation()
  const positionPage = useSelector(
    (state: StateSchema) => getPageScrollByPath(state, pathname)
  )

  useInfiniteScroll({
    callback: onScrollEnd,
    triggerRef,
    containerRef
  })

  useInitialEffect(() => {
    containerRef.current.scrollTop = positionPage
  })

  const onScroll = useThrottle((event: UIEvent<HTMLDivElement>) => {
    dispatch(
      pageActions.setScrollPosition({
        position: event.currentTarget.scrollTop,
        path: pathname
      })
    )
  }, 500)

  return (
    <main
      className={classNames(cls.Page, {}, [className])}
      ref={containerRef}
      onScroll={onScroll}
    >
      {children}
      {onScrollEnd && (
        <div className={cls.trigger} ref={triggerRef}/>
      )}
    </main>
  )
}
