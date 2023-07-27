import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import AvatarImg from 'shared/assets/tests/avatar.png'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'shared/lib/context/ThemeContext'
import { ProfileCard } from './ProfileCard'

export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ProfileCard>

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />

export const Light = Template.bind({})
Light.args = {
  data: {
    avatar: AvatarImg,
    firstName: 'asdf',
    lastName: 'msnhjd',
    age: 20,
    country: Country.RUSSIA,
    username: 'user',
    currency: Currency.RUB,
    city: 'Moscow'
  }
}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]

export const Loading = Template.bind({})
Loading.args = {
  isLoading: true
}

export const Error = Template.bind({})
Error.args = {
  error: 'error'
}

export const ReadOnly = Template.bind({})
ReadOnly.args = {
  readonly: true
}
