import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { Tabs } from './Tabs'

export default {
  title: 'slice/Tabs',
  component: Tabs,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Tabs>

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />

export const Default = Template.bind({})
Default.args = {}
