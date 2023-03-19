import { classNames } from 'shared/lib/classNames/classNames'
import { useState } from 'react'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher'
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher'
import cls from './Sidebar.module.scss'
import { useTranslation } from 'react-i18next'

interface SidebarProps {
  className?: string
}

export const Sidebar = (props: SidebarProps) => {
  const { className } = props
  const [collapsed, setCollapsed] = useState<boolean>(false)
  const { t } = useTranslation()

  const onToggle = () => {
    setCollapsed((prev) => !prev)
  }

  return (
    <div
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
    >
      <button onClick={onToggle}>{t('toggle')}</button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.langSwitcher} />
      </div>
    </div>
  )
}
