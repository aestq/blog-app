import { memo, useState } from 'react'
import { useSelector } from 'react-redux'
import { LangSwitcher } from 'features/LangSwitcher'
import { ThemeSwitcher } from 'features/ThemeSwitcher'
import { classNames, type Mods } from 'shared/lib/classNames/classNames'
import { Button } from 'shared/ui/Button/Button'
import { getSidebarItems } from '../../model/selectors/getSidebarItems'
import { SidebarItem } from '../SidebarItem/SidebarItem'
import cls from './Sidebar.module.scss'

interface SidebarProps {
  className?: string
}

export const Sidebar = memo((props: SidebarProps) => {
  const { className } = props
  const [collapsed, setCollapsed] = useState(false)
  const items = useSelector(getSidebarItems)

  const onToggle = () => {
    setCollapsed((prev) => !prev)
  }

  const mods: Mods = {
    [cls.collapsed]: collapsed
  }

  return (
    <aside
      className={classNames(cls.Sidebar, mods, [className])}
      data-testid='sidebar'
    >
      <div className={cls.items}>
        {items.map(item => (
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
        theme='backgroundInverted'
        size='L'
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
    </aside>
  )
})
