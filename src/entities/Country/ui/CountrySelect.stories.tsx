import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'shared/lib/context/ThemeContext'
import { CountrySelect } from './CountrySelect'

export default {
  title: 'entities/CountrySelect',
  component: CountrySelect,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof CountrySelect>

const Template: ComponentStory<typeof CountrySelect> = (args) => <CountrySelect {...args} />

export const Light = Template.bind({})
Light.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
