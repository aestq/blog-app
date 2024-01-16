import { type MutableRefObject, useEffect } from 'react'

interface UseInfiniteScrollOptions {
  callback?: () => void
  triggerRef: MutableRefObject<HTMLElement>
  containerRef: MutableRefObject<HTMLElement>
}

export const useInfiniteScroll = (options: UseInfiniteScrollOptions) => {
  const { callback, triggerRef, containerRef } = options

  useEffect(() => {
    let observer: IntersectionObserver | null = null

    if(callback) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if(entry.isIntersecting) {
            callback()
          }
        },
        {
          root: containerRef.current
        }
      )
      observer.observe(triggerRef.current)
    }

    return () => {
      observer?.disconnect()
    }
  }, [containerRef, triggerRef, callback])
}
