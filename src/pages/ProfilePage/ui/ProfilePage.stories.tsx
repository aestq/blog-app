import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import AvatarImg from 'shared/assets/tests/avatar.png'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'shared/lib/context/ThemeContext'
import ProfilePage from './ProfilePage'

export default {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ProfilePage>

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage />

export const Light = Template.bind({})
Light.args = {}
Light.decorators = [StoreDecorator({
  editableProfile: {
    form: {
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
})]

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})]
