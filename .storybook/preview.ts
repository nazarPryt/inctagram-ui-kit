import type { Preview } from '@storybook/react'

import { ThemeProvider } from 'styled-components'
import { withThemeFromJSXProvider } from '@storybook/addon-styling'

import { withThemeDecorator } from '../src/decorators/withThemeDecorator'
import { lightTheme } from '../src/styles/lightTheme'
import { darkTheme } from '../src/styles/darkTheme'
import { GlobalStyles } from '../src/styles/GlobalStyles'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

  decorators: [
    withThemeFromJSXProvider({
      themes: {
        light: lightTheme,
        dark: darkTheme,
      },
      defaultTheme: 'light',
      Provider: ThemeProvider,
      GlobalStyles,
    }),
    withThemeDecorator,
  ],
}

export default preview
