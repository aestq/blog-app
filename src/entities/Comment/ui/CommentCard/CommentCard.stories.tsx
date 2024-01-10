import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'shared/lib/context/ThemeContext'
import { CommentCard } from './CommentCard'

export default {
  title: 'entities/Comment/CommentCard',
  component: CommentCard,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof CommentCard>

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />

export const Default = Template.bind({})
Default.args = {
  comment: {
    id: '1',
    text: 'comment',
    user: { id: 'id', username: 'user', avatar: 'https://cdn-icons-png.flaticon.com/512/552/552721.png' }
  }
}

export const NoAvatar = Template.bind({})
NoAvatar.args = {
  comment: {
    id: '1',
    text: 'comment',
    user: { id: 'id', username: 'user' }
  }
}

export const Dark = Template.bind({})
NoAvatar.args = {
  comment: {
    id: '1',
    text: 'comment',
    user: { id: 'id', username: 'user' }
  }
}
NoAvatar.decorators = [ThemeDecorator(Theme.DARK)]

export const Loading = Template.bind({})
Loading.args = {
  isLoading: true
}
