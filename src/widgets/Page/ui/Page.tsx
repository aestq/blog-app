import { type MutableRefObject, type ReactNode, useRef } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll'
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

  useInfiniteScroll({
    callback: onScrollEnd,
    triggerRef,
    containerRef
  })

  return (
    <main
      className={classNames(cls.Page, {}, [className])}
      ref={containerRef}
    >
      {children}
      {onScrollEnd && (
        <div className={cls.trigger} ref={triggerRef}/>
      )}
    </main>
  )
}
