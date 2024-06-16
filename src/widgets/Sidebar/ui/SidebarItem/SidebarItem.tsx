import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { getUserAuthData } from 'entities/User'
import { classNames, type Mods } from 'shared/lib/classNames/classNames'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { HStack } from 'shared/ui/Stack/HStack'
import { type SidebarItemType } from '../../model/types/sidebar'
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
    <HStack
      theme='secondary'
      to={item.path}
      className={classNames('', mods, [])}
      as={AppLink}
      gap='8'
    >
      <item.Icon className={cls.icon}/>
      <span
        className={cls.link}
      >
        {t(item.text)}
      </span>
    </HStack>
  )
})
