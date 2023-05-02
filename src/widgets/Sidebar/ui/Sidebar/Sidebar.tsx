import { classNames, type Mods } from 'shared/lib/classNames/classNames'
import { ThemeSwitcher } from 'features/ThemeSwitcher'
import { LangSwitcher } from 'features/LangSwitcher'
import { memo, useState } from 'react'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import { sidebarItemsList } from '../../model/items'
import { SidebarItem } from '../SidebarItem/SidebarItem'
import cls from './Sidebar.module.scss'

interface SidebarProps {
  className?: string
}

export const Sidebar = memo((props: SidebarProps) => {
  const { className } = props
  const [collapsed, setCollapsed] = useState(false)

  const onToggle = () => {
    setCollapsed((prev) => !prev)
  }

  const mods: Mods = {
    [cls.collapsed]: collapsed
  }

  return (
    <div
      className={classNames(cls.Sidebar, mods, [className])}
      data-testid='sidebar'
    >
      <div className={cls.items}>
        {sidebarItemsList.map(item => (
          <SidebarItem
            collapsed={collapsed}
            item={item}
            key={item.path}
          />
        ))}
      </div>
      <Button
        data-testid='sidebar-toggle'
        className={cls.collapseButton}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        size={ButtonSize.L}
        onClick={onToggle}
        square
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher
          className={cls.langSwitcher}
          short={collapsed}
        />
      </div>
    </div>
  )
})
