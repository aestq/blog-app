import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { ArticleViewSelector } from './ArticleViewSelector'

export default {
  title: 'slice/ArticleViewSelector',
  component: ArticleViewSelector,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ArticleViewSelector>

const Template: ComponentStory<typeof ArticleViewSelector> = (args) => <ArticleViewSelector {...args} />

export const Default = Template.bind({})
Default.args = {}
