import { ThemeProvider } from 'app/providers/ThemeProvider'
import { type Theme } from 'shared/lib/context/ThemeContext'
import { type Story } from '@storybook/react'

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (
  <ThemeProvider initialTheme={theme}>
    <div className={`app ${theme}`}>
      <StoryComponent />
    </div>
  </ThemeProvider>
)
