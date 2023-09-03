import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import ArticlesPage from './ArticlesPage'

export default {
  title: 'slice/ArticlesPage',
  component: ArticlesPage,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ArticlesPage>

const Template: ComponentStory<typeof ArticlesPage> = (args) => <ArticlesPage {...args} />

export const Primary = Template.bind({})
Primary.args = {}
