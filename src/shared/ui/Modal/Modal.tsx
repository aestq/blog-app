import {
  type MouseEvent, type ReactNode, useCallback, useEffect, useRef, useState
} from 'react'
import { classNames, type Mods } from 'shared/lib/classNames/classNames'
import { useTheme } from 'shared/lib/hooks/useTheme'
import { Portal } from 'shared/ui/Portal/Portal'
import cls from './Modal.module.scss'

interface ModalProps {
  className?: string
  children?: ReactNode
  isOpen?: boolean
  onClose?: () => void
  lazy?: boolean
}

const ANIMATION_DELAY = 300

export const Modal = (props: ModalProps) => {
  const {
    className,
    children,
    isOpen,
    onClose,
    lazy
  } = props

  const [isClosing, setIsClosing] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout>>()
  const { theme } = useTheme()

  useEffect(() => {
    if(isOpen) {
      setIsMounted(true)
    }
  }, [isOpen])

  const closeHandler = useCallback(() => {
    if(onClose) {
      setIsClosing(true)
      timerRef.current = setTimeout(() => {
        onClose()
        setIsClosing(false)
      }, ANIMATION_DELAY)
    }
  }, [onClose])

  const onContentClick = (event: MouseEvent) => {
    event.stopPropagation()
  }

  const onKeyDown = useCallback((event: KeyboardEvent) => {
    if(event.key === 'Escape') {
      closeHandler()
    }
  }, [closeHandler])

  useEffect(() => {
    if(isOpen) {
      window.addEventListener('keydown', onKeyDown)
    }

    return () => {
      if(timerRef.current) {
        clearTimeout(timerRef.current)
      }
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [onKeyDown, isOpen])

  const mods: Mods = {
    [cls.opened]: isOpen,
    [cls.closing]: isClosing
  }

  if(lazy && !isMounted) {
    return null
  }

  return (
    <Portal>
      <div className={classNames(cls.Modal, mods, [className, theme])}>
        <div className={cls.overlay} onClick={closeHandler}>
          <div className={cls.content} onClick={onContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  )
}
