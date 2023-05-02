import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { EditableProfile } from './EditableProfile'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'shared/lib/context/ThemeContext'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator'

export default {
  title: 'features/EditableProfile',
  component: EditableProfile,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof EditableProfile>

const Template: ComponentStory<typeof EditableProfile> = (args) => <EditableProfile {...args} />

export const Light = Template.bind({})
Light.args = {}
Light.decorators = [StoreDecorator({})]

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})]
