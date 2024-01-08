import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { CommentCard } from './CommentCard'

export default {
  title: 'entity/CommentCard',
  component: CommentCard,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof CommentCard>

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />

export const Default = Template.bind({})
Default.args = {}
