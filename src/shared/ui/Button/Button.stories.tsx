import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'shared/lib/context/ThemeContext'
import { Button, ButtonSize, ButtonTheme } from './Button'

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

export const ClearInverted = Template.bind({})
ClearInverted.args = {
  theme: ButtonTheme.CLEAR_INVERTED,
  children: 'Текст кнопки'
}

export const Outline = Template.bind({})
Outline.args = {
  theme: ButtonTheme.OUTLINE,
  children: 'Текст кнопки'
}

export const Background = Template.bind({})
Background.args = {
  theme: ButtonTheme.BACKGROUND,
  children: 'Текст кнопки'
}

export const BackgroundInverted = Template.bind({})
BackgroundInverted.args = {
  theme: ButtonTheme.BACKGROUND_INVERTED,
  children: 'Текст кнопки'
}

export const Disabled = Template.bind({})
Disabled.args = {
  theme: ButtonTheme.BACKGROUND_INVERTED,
  children: 'Текст кнопки',
  disabled: true
}

export const ClearDark = Template.bind({})
ClearDark.args = {
  theme: ButtonTheme.CLEAR,
  children: 'Текст кнопки'
}
ClearDark.decorators = [ThemeDecorator(Theme.DARK)]

export const ClearInvertedDark = Template.bind({})
ClearInvertedDark.args = {
  theme: ButtonTheme.CLEAR_INVERTED,
  children: 'Текст кнопки'
}
ClearInvertedDark.decorators = [ThemeDecorator(Theme.DARK)]

export const OutlineDark = Template.bind({})
OutlineDark.args = {
  theme: ButtonTheme.OUTLINE,
  children: 'Текст кнопки'
}
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)]

export const BackgroundDark = Template.bind({})
BackgroundDark.args = {
  theme: ButtonTheme.BACKGROUND,
  children: 'Текст кнопки'
}
BackgroundDark.decorators = [ThemeDecorator(Theme.DARK)]

export const BackgroundInvertedDark = Template.bind({})
BackgroundInvertedDark.args = {
  theme: ButtonTheme.BACKGROUND_INVERTED,
  children: 'Текст кнопки'
}
BackgroundInvertedDark.decorators = [ThemeDecorator(Theme.DARK)]

export const SizeM = Template.bind({})
SizeM.args = {
  theme: ButtonTheme.BACKGROUND_INVERTED,
  size: ButtonSize.M,
  children: 'Текст кнопки'
}

export const SizeL = Template.bind({})
SizeL.args = {
  theme: ButtonTheme.BACKGROUND_INVERTED,
  size: ButtonSize.L,
  children: 'Текст кнопки'
}

export const SizeXL = Template.bind({})
SizeXL.args = {
  theme: ButtonTheme.BACKGROUND_INVERTED,
  size: ButtonSize.XL,
  children: 'Текст кнопки'
}

export const Square = Template.bind({})
Square.args = {
  theme: ButtonTheme.BACKGROUND_INVERTED,
  square: true,
  children: '>'
}
