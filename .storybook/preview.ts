import { ThemeProvider } from 'styled-components'
import { withThemeFromJSXProvider } from '@storybook/addon-themes'
import { withThemeDecorator } from '../src/decorators/withThemeDecorator'
import { lightTheme } from '../src/styles/lightTheme'
import { darkTheme } from '../src/styles/darkTheme'
import { GlobalStyles } from '../src/styles/GlobalStyles'
import { Preview, ReactRenderer } from '@storybook/react'
import 'react-toastify/dist/ReactToastify.css'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    withThemeFromJSXProvider<ReactRenderer>({
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
