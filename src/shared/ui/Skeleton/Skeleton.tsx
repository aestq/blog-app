import { type CSSProperties } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Skeleton.module.scss'

interface SkeletonProps {
  className?: string
  height?: string | number
  width?: string | number
  radius?: string | number
}

export const Skeleton = (props: SkeletonProps) => {
  const {
    className,
    height = 100,
    width = 200,
    radius = 5
  } = props

  const styles: CSSProperties = {
    width, height, borderRadius: radius
  }

  return (
    <div
      className={classNames(cls.Skeleton, {}, [className])}
      style={styles}
    />
  )
}
