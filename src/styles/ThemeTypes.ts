import { TypographyType } from './mixins'

export type ThemeAppType = 'dark' | 'light'

interface IPalette {
  100: string
  300: string
  500: string
  700: string
  900: string
}

interface IViewPort {
  768: string //todo check & add more relevant Screen sizes and breakpoints
}

declare module 'styled-components' {
  export interface DefaultTheme {
    bodyColor: IPalette
    borderRadius: string
    name: ThemeAppType
    palette: {
      danger: IPalette
      primary: IPalette
      success: IPalette
      warning: IPalette
    }
    textColor: IPalette
    typography: TypographyType
    viewPort: IViewPort
  }
}
