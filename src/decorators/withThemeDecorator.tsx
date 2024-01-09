import { Decorator } from '@storybook/react'
import { ThemeProvider } from 'styled-components'

import { ToastContainerStyled } from '../components/Toast/Toast.styled'
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
      <style>{`
        html {
            font-family: 'Inter', sans-serif;
        }
      `}</style>
      <GlobalStyles />
      <Story />
      <ToastContainerStyled
        autoClose={5000}
        closeOnClick
        draggable
        hideProgressBar={false}
        newestOnTop={false}
        pauseOnFocusLoss
        pauseOnHover
        position={'bottom-left'}
        rtl={false}
      />
    </ThemeProvider>
  )
}
