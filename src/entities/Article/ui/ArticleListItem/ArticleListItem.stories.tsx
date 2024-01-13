import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { ArticleListItem } from './ArticleListItem'

export default {
  title: 'slice/ArticleListItem',
  component: ArticleListItem,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ArticleListItem>

const Template: ComponentStory<typeof ArticleListItem> = (args) => <ArticleListItem {...args} />

export const Default = Template.bind({})
Default.args = {}
