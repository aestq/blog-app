import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { type Article, ArticleType, ArticleView } from 'entities/Article'
import { ArticleList } from './ArticleList'

export default {
  title: 'entities/Article/ArticleList',
  component: ArticleList,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ArticleList>

const Template: ComponentStory<typeof ArticleList> = (args) => <ArticleList {...args} />

const article: Article = {
  id: '1',
  title: 'Article title',
  img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
  views: 701,
  type: [ArticleType.SCIENCE, ArticleType.IT],
  blocks: [],
  createdAt: '01.01.2024',
  subtitle: 'Article subtitle',
  user: { id: '1', username: 'username' }
}

export const Empty = Template.bind({})
Empty.args = {
  articles: []
}

export const Tile = Template.bind({})
Tile.args = {
  articles: [article, article, article, article],
  view: ArticleView.TILE
}

export const List = Template.bind({})
List.args = {
  articles: [article, article, article],
  view: ArticleView.LIST
}

export const TileLoading = Template.bind({})
TileLoading.args = {
  articles: [],
  view: ArticleView.TILE,
  isLoading: true
}
export const ListLoading = Template.bind({})
ListLoading.args = {
  articles: [],
  view: ArticleView.LIST,
  isLoading: true
}
