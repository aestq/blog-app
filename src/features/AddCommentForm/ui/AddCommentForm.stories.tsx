import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'shared/lib/context/ThemeContext'
import AddCommentForm from './AddCommentForm'

export default {
  title: 'features/AddCommentForm',
  component: AddCommentForm,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof AddCommentForm>

const Template: ComponentStory<typeof AddCommentForm> = (args) => <AddCommentForm {...args} />

export const Default = Template.bind({})
Default.args = {}
Default.decorators = [StoreDecorator({
  addCommentForm: { text: '' }
})]

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [
  StoreDecorator({
    addCommentForm: { text: '' }
  }),
  ThemeDecorator(Theme.DARK)
]
