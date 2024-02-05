import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { ArticleSortSelector } from './ArticleSortSelector'

export default {
  title: 'slice/ArticleSortSelector',
  component: ArticleSortSelector,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ArticleSortSelector>

const Template: ComponentStory<typeof ArticleSortSelector> = (args) => <ArticleSortSelector {...args} />

export const Default = Template.bind({})
Default.args = {}
