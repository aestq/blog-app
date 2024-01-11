import { createSelector } from 'reselect'
import { getUserAuthData } from 'entities/User'
import AboutIcon from 'shared/assets/icons/AboutIcon.svg'
import ArticlesIcon from 'shared/assets/icons/ArticlesIcon.svg'
import MainIcon from 'shared/assets/icons/MainIcon.svg'
import ProfileIcon from 'shared/assets/icons/ProfileIcon.svg'
import { routePath } from 'shared/config/routeConfig/routeConfig'
import { type SidebarItemType } from '../types/sidebar'

export const getSidebarItems = createSelector(
  getUserAuthData,
  (user) => {
    const sidebarItemsList: SidebarItemType[] = [
      {
        path: routePath.main,
        Icon: MainIcon,
        text: 'Главная'
      },
      {
        path: routePath.about,
        Icon: AboutIcon,
        text: 'О сайте'
      }
    ]

    if(user) {
      sidebarItemsList.push(
        {
          path: `${routePath.profile}${user.id}`,
          Icon: ProfileIcon,
          text: 'Профиль',
          authOnly: true
        },
        {
          path: routePath.articles,
          Icon: ArticlesIcon,
          text: 'Статьи',
          authOnly: true
        }
      )
    }

    return sidebarItemsList
  }
)
