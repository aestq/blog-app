import { memo, type ReactNode, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Card } from 'shared/ui/Card/Card'
import cls from './Tabs.module.scss'

export interface TabItem<T extends string> {
  value: T
  content: ReactNode
}

interface TabsProps<T extends string> {
  className?: string
  items: TabItem<T>[]
  value: T
  onChange: (value: T) => void
}

function TabsComponent<T extends string>(props: TabsProps<T>) {
  const {
    className,
    items,
    value,
    onChange
  } = props

  const onClick = useCallback((value: T) => {
    return () => {
      onChange(value)
    }
  }, [onChange])

  return (
    <div className={classNames(cls.Tabs, {}, [className])}>
      {items.map((item) => (
        <Card
          className={cls.item}
          key={item.value}
          theme={item.value === value ? 'bg' : 'outline'}
          onClick={onClick(item.value)}
        >
          {item.content}
        </Card>
      ))}
    </div>
  )
}

export const Tabs = memo(TabsComponent) as typeof TabsComponent
