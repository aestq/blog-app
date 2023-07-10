import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'shared/lib/context/ThemeContext'
import { Modal } from './Modal'

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' }
  },
  args: {
    isOpen: true
  }
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />

export const Light = Template.bind({})
Light.args = {
  children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium consequuntur corporis cupiditate ex facere nobis placeat quos sapiente sequi voluptatum!'
}

export const Dark = Template.bind({})
Dark.args = {
  children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium consequuntur corporis cupiditate ex facere nobis placeat quos sapiente sequi voluptatum!'
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
