import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { Navbar } from './Navbar'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'shared/lib/context/ThemeContext'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator'

export default {
  title: 'widgets/Navbar',
  component: Navbar,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Navbar>

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />

export const LightAuth = Template.bind({})
LightAuth.args = {}
LightAuth.decorators = [StoreDecorator({
  user: {
    authData: {
      id: 1,
      username: 'admin'
    }
  }
})]

export const DarkNotAuth = Template.bind({})
DarkNotAuth.args = {}
DarkNotAuth.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
  user: {
    authData: undefined
  }
})]
