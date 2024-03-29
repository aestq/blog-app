import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'shared/lib/context/ThemeContext'
import { CurrencySelect } from './CurrencySelect'

export default {
  title: 'entities/CurrencySelect',
  component: CurrencySelect,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof CurrencySelect>

const Template: ComponentStory<typeof CurrencySelect> = (args) => <CurrencySelect {...args} />

export const Light = Template.bind({})
Light.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
