import { type SVGProps, type VFC } from 'react'
import { ArticleView } from 'entities/Article'
import ListIcon from 'shared/assets/icons/list-icon.svg'
import TileIcon from 'shared/assets/icons/tile-icon.svg'

interface ViewTypes {
  view: ArticleView
  icon: VFC<SVGProps<SVGSVGElement>>
}

export const viewTypes: ViewTypes[] = [
  {
    view: ArticleView.TILE,
    icon: TileIcon
  },
  {
    view: ArticleView.LIST,
    icon: ListIcon
  }
]
