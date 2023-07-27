import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import AvatarImg from 'shared/assets/tests/avatar.png'
import { Avatar } from './Avatar'

export default {
  title: 'shared/Avatar',
  component: Avatar,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />

export const Primary = Template.bind({})
Primary.args = {
  size: 150,
  src: AvatarImg
}

export const Small = Template.bind({})
Small.args = {
  size: 30,
  src: AvatarImg
}
