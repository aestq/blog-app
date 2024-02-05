import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { ArticleTypeTabs } from './ArticleTypeTabs'

export default {
  title: 'slice/ArticleTypeTabs',
  component: ArticleTypeTabs,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ArticleTypeTabs>

const Template: ComponentStory<typeof ArticleTypeTabs> = (args) => <ArticleTypeTabs {...args} />

export const Default = Template.bind({})
Default.args = {}
