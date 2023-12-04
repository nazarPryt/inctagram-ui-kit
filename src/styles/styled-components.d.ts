export type ThemeAppType = 'dark' | 'light'
import 'styled-components'

interface IPalette {
    100: string
    300: string
    500: string
    700: string
    900: string
    
}

interface IViewPort {
    768: string //todo check & add relevant Screen sizes and breakpoints
}

interface ITypographyType {
    fontFamilyPrimary: string

    fontSizeL: string
    fontSizeM: string
    // font sizes
    fontSizeNotification: string
    fontSizeS: string

    fontSizeXL: string
    fontSizeXS: string
    fontSizeXXL: string
    fontWeightBold: number
    fontWeightMedium: number
    // font weights
    fontWeightRegular: number
    fontWeightSemiBold: number

    lineHeightL: string
    lineHeightM: string
    lineHeightS: string
    // line heights
    lineHeightXS: string
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
        typography: ITypographyType
        viewPort: IViewPort
    }
}
