import { type SVGProps, type VFC } from 'react'

export interface SidebarItemType {
  Icon: VFC<SVGProps<SVGSVGElement>>
  path: string
  text: string
  authOnly?: boolean
}
