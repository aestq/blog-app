import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'shared/lib/context/ThemeContext'
import LoginForm from './LoginForm'

export default {
  title: 'features/LoginForm',
  component: LoginForm,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof LoginForm>

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />

export const Light = Template.bind({})
Light.args = {}
Light.decorators = [StoreDecorator({
  loginForm: {
    username: 'admin',
    password: '123',
    isLoading: false
  }
})]

export const Error = Template.bind({})
Error.args = {}
Error.decorators = [StoreDecorator({
  loginForm: {
    username: 'admin',
    password: '123',
    isLoading: false,
    error: 'Неверный логин или пароль'
  }
})]

export const Loading = Template.bind({})
Loading.args = {}
Loading.decorators = [StoreDecorator({
  loginForm: {
    username: 'admin',
    password: '123',
    isLoading: true
  }
})]

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
  loginForm: {
    username: 'User',
    password: '12345678',
    isLoading: false
  }
})]
