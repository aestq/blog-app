import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'shared/lib/context/ThemeContext'
import { Input } from './Input'

export default {
  title: 'shared/Input',
  component: Input,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const Light = Template.bind({})
Light.args = {
  placeholder: 'placeholder'
}

export const Dark = Template.bind({})
Dark.args = {
  placeholder: 'placeholder'
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]

export const ReadOnly = Template.bind({})
ReadOnly.args = {
  placeholder: 'placeholder',
  readOnly: true
}
