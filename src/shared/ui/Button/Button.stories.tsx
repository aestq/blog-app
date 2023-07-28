import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'shared/lib/context/ThemeContext'
import { Button } from './Button'

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
  theme: 'clear',
  children: 'Текст кнопки'
}

export const ClearInverted = Template.bind({})
ClearInverted.args = {
  theme: 'clearInverted',
  children: 'Текст кнопки'
}

export const Outline = Template.bind({})
Outline.args = {
  theme: 'outline',
  children: 'Текст кнопки'
}

export const Background = Template.bind({})
Background.args = {
  theme: 'background',
  children: 'Текст кнопки'
}

export const BackgroundInverted = Template.bind({})
BackgroundInverted.args = {
  theme: 'backgroundInverted',
  children: 'Текст кнопки'
}

export const Disabled = Template.bind({})
Disabled.args = {
  theme: 'backgroundInverted',
  children: 'Текст кнопки',
  disabled: true
}

export const ClearDark = Template.bind({})
ClearDark.args = {
  theme: 'clear',
  children: 'Текст кнопки'
}
ClearDark.decorators = [ThemeDecorator(Theme.DARK)]

export const ClearInvertedDark = Template.bind({})
ClearInvertedDark.args = {
  theme: 'clearInverted',
  children: 'Текст кнопки'
}
ClearInvertedDark.decorators = [ThemeDecorator(Theme.DARK)]

export const OutlineDark = Template.bind({})
OutlineDark.args = {
  theme: 'outline',
  children: 'Текст кнопки'
}
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)]

export const BackgroundDark = Template.bind({})
BackgroundDark.args = {
  theme: 'background',
  children: 'Текст кнопки'
}
BackgroundDark.decorators = [ThemeDecorator(Theme.DARK)]

export const BackgroundInvertedDark = Template.bind({})
BackgroundInvertedDark.args = {
  theme: 'backgroundInverted',
  children: 'Текст кнопки'
}
BackgroundInvertedDark.decorators = [ThemeDecorator(Theme.DARK)]

export const SizeM = Template.bind({})
SizeM.args = {
  theme: 'backgroundInverted',
  size: 'M',
  children: 'Текст кнопки'
}

export const SizeL = Template.bind({})
SizeL.args = {
  theme: 'backgroundInverted',
  size: 'L',
  children: 'Текст кнопки'
}

export const SizeXL = Template.bind({})
SizeXL.args = {
  theme: 'backgroundInverted',
  size: 'XL',
  children: 'Текст кнопки'
}

export const Square = Template.bind({})
Square.args = {
  theme: 'backgroundInverted',
  square: true,
  children: '>'
}
