import { DefaultTheme } from 'styled-components'

import { typography } from './mixins'

export const darkTheme: DefaultTheme = {
  bodyColor: {
    100: '#4C4C4C',
    300: '#333333',
    500: '#171717',
    700: '#0D0D0D',
    900: '#0D0D0D',
  },
  borderRadius: '4px',
  name: 'dark',
  palette: {
    danger: {
      100: '#FF8099',
      300: '#F23D61',
      500: '#CC1439',
      700: '#990F2B',
      900: '#660A1D',
    },
    primary: {
      100: '#73A5FF',
      300: '#4C8DFF',
      500: '#397DF6',
      700: '#2F68CC',
      900: '#234E99',
    },
    success: {
      100: '#80FFBF',
      300: '#22E584',
      500: '#14CC70',
      700: '#0F9954',
      900: '#0A6638',
    },
    warning: {
      100: '#FFD073',
      300: '#E5AC39',
      500: '#D99000',
      700: '#996600',
      900: '#664400',
    },
  },
  textColor: {
    100: '#FFFFFF',
    300: '#F7FBFF',
    500: '#EDF3FA',
    700: '#D5DAE0',
    900: '#BDC1C7',
  },
  typography: typography,
  viewPort: {
    768: '768',
  },
}
