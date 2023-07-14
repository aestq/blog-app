import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { type SidebarItemType } from 'widgets/Sidebar/model/items'
import { getUserAuthData } from 'entities/User'
import { classNames, type Mods } from 'shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import cls from './SidebarItem.module.scss'

interface SidebarItemProps {
  item: SidebarItemType
  collapsed: boolean
}

export const SidebarItem = memo((props: SidebarItemProps) => {
  const { item, collapsed } = props
  const { t } = useTranslation()
  const authData = useSelector(getUserAuthData)

  if(item.authOnly && !authData) {
    return null
  }

  const mods: Mods = {
    [cls.collapsed]: collapsed
  }

  return (
    <AppLink
      theme={AppLinkTheme.SECONDARY}
      to={item.path}
      className={classNames(cls.SidebarItem, mods)}
    >
      <item.Icon className={cls.icon} />
      <span
        className={cls.link}
      >
        {t(item.text)}
      </span>
    </AppLink>
  )
})
