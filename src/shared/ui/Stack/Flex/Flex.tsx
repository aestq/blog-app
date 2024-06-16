import { type ComponentProps, type ElementType, type ReactNode } from 'react'
import { type Additional, classNames } from 'shared/lib/classNames/classNames'
import cls from './Flex.module.scss'

type FlexJustify = 'start' | 'center' | 'end' | 'between'
type FlexAlign = 'start' | 'center' | 'end'
type FlexDirection = 'row' | 'column'
type FlexGap = '4' | '8' | '16' | '32'

interface FlexBaseProps<E extends ElementType> {
  className?: string
  children?: ReactNode
  justify?: FlexJustify
  align?: FlexAlign
  direction?: FlexDirection
  gap?: FlexGap
  max?: boolean
  as?: E
}

export type FlexProps<E extends ElementType = ElementType> = FlexBaseProps<E> & Omit<ComponentProps<E>, keyof FlexBaseProps<E>>

const justifyClasses: Record<FlexJustify, string> = {
  start: cls.justifyStart,
  center: cls.justifyCenter,
  end: cls.justifyEnd,
  between: cls.justifyBetween
}

const alignClasses: Record<FlexAlign, string> = {
  start: cls.alignStart,
  center: cls.alignCenter,
  end: cls.alignEnd
}

const directionClasses: Record<FlexDirection, string> = {
  row: cls.directionRow,
  column: cls.directionColumn
}

const gapClasses: Record<FlexGap, string> = {
  4: cls.gap4,
  8: cls.gap8,
  16: cls.gap16,
  32: cls.gap32
}

export const Flex = (props: FlexProps) => {
  const {
    className,
    justify = 'start',
    gap,
    max = false,
    direction = 'row',
    children,
    align = 'center',
    as = 'div',
    ...otherProps
  } = props

  const Tag = as

  const additional: Additional = [
    className,
    justifyClasses[justify],
    alignClasses[align],
    directionClasses[direction],
    gap && gapClasses[gap]
  ]

  return (
    <Tag className={classNames(cls.Flex, { [cls.max]: max }, additional)} {...otherProps}>
      {children}
    </Tag>
  )
}
