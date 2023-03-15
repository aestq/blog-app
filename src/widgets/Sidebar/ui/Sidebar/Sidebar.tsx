import cls from './Sidebar.module.scss'
import {classNames} from 'shared/lib/classNames/classNames'
import {useState} from 'react'
import {ThemeSwitcher} from 'shared/ui/ThemeSwitcher/ThemeSwitcher'
import {LangSwitcher} from 'shared/ui/LangSwitcher/LangSwitcher'

interface SidebarProps {
  className?: string
}

export const Sidebar = (props: SidebarProps) => {
  const {className} = props
  const [collapsed, setCollapsed] = useState<boolean>(false)

  const onToggle = () => {
    setCollapsed(prev => !prev)
  }

  return (
    <div
      className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}
    >
      <button onClick={onToggle}>toogle</button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.langSwitcher}/>
      </div>
    </div>
  )
}