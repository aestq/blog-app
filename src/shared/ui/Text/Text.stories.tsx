import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { Text, TextTheme } from './Text'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'shared/lib/context/ThemeContext'

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />

export const Primary = Template.bind({})
Primary.args = {
  title: 'Какой-либо заголовок',
  text: 'Какой-либо текст'
}

export const Error = Template.bind({})
Error.args = {
  title: 'Какой-либо заголовок',
  text: 'Какой-либо текст',
  theme: TextTheme.ERROR
}

export const OnlyTitle = Template.bind({})
OnlyTitle.args = {
  title: 'Какой-либо заголовок'
}

export const OnlyText = Template.bind({})
OnlyText.args = {
  text: 'Какой-либо текст'
}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
  title: 'Какой-либо заголовок',
  text: 'Какой-либо текст'
}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const OnlyTitleDark = Template.bind({})
OnlyTitleDark.args = {
  title: 'Какой-либо заголовок'
}
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)]

export const OnlyTextDark = Template.bind({})
OnlyTextDark.args = {
  text: 'Какой-либо текст'
}
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)]