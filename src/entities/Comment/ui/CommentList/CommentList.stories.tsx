import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'shared/lib/context/ThemeContext'
import { CommentList } from './CommentList'

export default {
  title: 'entities/Comment/CommentList',
  component: CommentList,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof CommentList>

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />

export const Default = Template.bind({})
Default.args = {
  comments: [
    {
      id: '1',
      text: 'comment 1',
      user: { id: '1', username: 'user 1', avatar: 'https://cdn-icons-png.flaticon.com/512/552/552721.png' }
    },
    {
      id: '2',
      text: 'comment 2',
      user: { id: '2', username: 'user 2', avatar: 'https://cdn-icons-png.flaticon.com/512/552/552721.png' }
    },
    {

      id: '3',
      text: 'comment 3',
      user: { id: '3', username: 'user 3' }
    }
  ]
}

export const Loading = Template.bind({})
Loading.args = {
  isLoading: true
}

export const Dark = Template.bind({})
Dark.args = {
  comments: [
    {
      id: '1',
      text: 'comment 1',
      user: { id: '1', username: 'user 1', avatar: 'https://cdn-icons-png.flaticon.com/512/552/552721.png' }
    },
    {
      id: '2',
      text: 'comment 2',
      user: { id: '2', username: 'user 2', avatar: 'https://cdn-icons-png.flaticon.com/512/552/552721.png' }
    },
    {

      id: '3',
      text: 'comment 3',
      user: { id: '3', username: 'user 3' }
    }
  ]
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]

export const Empty = Template.bind({})
Empty.args = {
  comments: []
}
