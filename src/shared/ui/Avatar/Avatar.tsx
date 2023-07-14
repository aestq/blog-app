import { type CSSProperties, useMemo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Avatar.module.scss'

interface AvatarProps {
  className?: string
  src?: string
  size?: number
}

export const Avatar = (props: AvatarProps) => {
  const {
    className,
    src,
    size = 30
  } = props

  const sizeAvatar = useMemo<CSSProperties>(() => ({
    width: size,
    height: size
  }), [size])

  return (
    <img
      className={classNames(cls.Avatar, {}, [className])}
      src={src}
      alt='avatar'
      style={sizeAvatar}
    />
  )
}
