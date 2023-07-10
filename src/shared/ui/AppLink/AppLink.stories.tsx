import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'shared/lib/context/ThemeContext'
import { AppLink, AppLinkTheme } from './AppLink'

export default {
  title: 'shared/AppLink',
  component: AppLink,
  argTypes: {
    backgroundColor: { control: 'color' }
  },
  args: {
    to: '/'
  }
} as ComponentMeta<typeof AppLink>

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />

export const Primary = Template.bind({})
Primary.args = {
  theme: AppLinkTheme.PRIMARY,
  children: 'Текст ссылки'
}

export const Secondary = Template.bind({})
Secondary.args = {
  theme: AppLinkTheme.SECONDARY,
  children: 'Текст ссылки'
}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
  theme: AppLinkTheme.PRIMARY,
  children: 'Текст ссылки'
}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const SecondaryDark = Template.bind({})
SecondaryDark.args = {
  theme: AppLinkTheme.SECONDARY,
  children: 'Текст ссылки'
}
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)]
