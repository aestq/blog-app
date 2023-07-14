import { type VFC, type SVGProps } from 'react'
import AboutIcon from 'shared/assets/icons/AboutIcon.svg'
import MainIcon from 'shared/assets/icons/MainIcon.svg'
import ProfileIcon from 'shared/assets/icons/ProfileIcon.svg'
import { routePath } from 'shared/config/routeConfig/routeConfig'

export interface SidebarItemType {
  Icon: VFC<SVGProps<SVGSVGElement>>
  path: string
  text: string
  authOnly?: boolean
}

export const sidebarItemsList: SidebarItemType[] = [
  {
    path: routePath.main,
    Icon: MainIcon,
    text: 'Главная'
  },
  {
    path: routePath.about,
    Icon: AboutIcon,
    text: 'О сайте'
  },
  {
    path: routePath.profile,
    Icon: ProfileIcon,
    text: 'Профиль',
    authOnly: true
  }
]
