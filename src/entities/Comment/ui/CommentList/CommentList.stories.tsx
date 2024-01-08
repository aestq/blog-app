import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { CommentList } from './CommentList'

export default {
  title: 'slice/CommentList',
  component: CommentList,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof CommentList>

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />

export const Default = Template.bind({})
Default.args = {}
