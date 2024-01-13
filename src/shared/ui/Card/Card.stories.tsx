import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { Card } from './Card'

export default {
  title: 'shared/Card',
  component: Card,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Card'
}
