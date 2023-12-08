import { Decorator } from '@storybook/react'
import { ThemeProvider } from 'styled-components'

import { GlobalStyles } from '../styles/GlobalStyles'
import { darkTheme } from '../styles/darkTheme'
import { lightTheme } from '../styles/lightTheme'

const THEMES = {
  dark: darkTheme,
  light: lightTheme,
}

export const withThemeDecorator: Decorator = (Story, context) => {
  const { theme } = context.globals

  return (
    // @ts-ignore
    <ThemeProvider theme={THEMES[theme] || THEMES['light']}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  )
}
