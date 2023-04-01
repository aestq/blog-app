import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { Button, ButtonTheme } from './Button'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Clear = Template.bind({})
Clear.args = {
  theme: ButtonTheme.CLEAR,
  children: 'Текст кнопки'
}

export const Outline = Template.bind({})
Outline.args = {
  theme: ButtonTheme.OUTLINE,
  children: 'Текст кнопки'
}

export const ClearDark = Template.bind({})
ClearDark.args = {
  theme: ButtonTheme.CLEAR,
  children: 'Текст кнопки'
}
ClearDark.decorators = [ThemeDecorator(Theme.DARK)]

export const OutlineDark = Template.bind({})
OutlineDark.args = {
  theme: ButtonTheme.OUTLINE,
  children: 'Текст кнопки'
}
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)]
