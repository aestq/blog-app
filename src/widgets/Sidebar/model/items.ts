import { type VFC, type SVGProps } from 'react'
import { routePath } from 'shared/config/routeConfig/routeConfig'
import MainIcon from 'shared/assets/icons/MainIcon.svg'
import AboutIcon from 'shared/assets/icons/AboutIcon.svg'
import ProfileIcon from 'shared/assets/icons/ProfileIcon.svg'

export interface SidebarItemType {
  Icon: VFC<SVGProps<SVGSVGElement>>
  path: string
  text: string
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
    text: 'Профиль'
  }
]
