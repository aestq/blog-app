import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'shared/lib/context/ThemeContext'
import { Select, type SelectItem } from './Select'

const options: SelectItem<string>[] = [
  { content: 'option 1', value: '1' },
  { content: 'option 2', value: '2' },
  { content: 'option 3', value: '3' }
]

export default {
  title: 'shared/Select',
  component: Select,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />

export const Light = Template.bind({})
Light.args = {
  label: 'label select',
  value: '1',
  options
}

export const Dark = Template.bind({})
Dark.args = {
  label: 'label select',
  value: '1',
  options
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]

export const WithoutLabel = Template.bind({})
WithoutLabel.args = {
  value: '1',
  options
}
