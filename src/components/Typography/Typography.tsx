import {ComponentPropsWithoutRef, ElementType} from 'react'
import {TypographyStyle} from './Typography.styled'

export type TypographyProps<T extends ElementType = 'p'> = {
    as?: T
    color?: 'primary' | 'secondary' | 'error' | 'inherit'
    variant:
        | 'large'
        | 'h1'
        | 'h2'
        | 'h3'
        | 'regular_text_16'
        | 'Bold_text_16'
        | 'regular_text_14'
        | 'Medium_text_14'
        | 'bold_text_14'
        | 'small_text'
        | 'semi_bold_small_text'
        | 'regular_link'
        | 'small_link'
        | 'error'
    className?: string
} & ComponentPropsWithoutRef<T>

type VariantClassesType = {
    [key in TypographyProps['variant']]: React.ElementType
}

const variantClasses: VariantClassesType = {
    large: TypographyStyle.Large,
    h1: TypographyStyle.H1,
    h2: TypographyStyle.H2,
    h3: TypographyStyle.H3,
    regular_text_16: TypographyStyle.RegularText16,
    Bold_text_16: TypographyStyle.BoldText16,
    regular_text_14: TypographyStyle.RegularText14,
    Medium_text_14: TypographyStyle.MediumText14,
    bold_text_14: TypographyStyle.BoldText14,
    small_text: TypographyStyle.SmallText,
    semi_bold_small_text: TypographyStyle.SemiBoldSmallText,
    regular_link: TypographyStyle.RegularLink,
    small_link: TypographyStyle.SmallLink,
    error: TypographyStyle.Error,
}

export const Typography = <T extends ElementType = 'p'>(
    props: TypographyProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof TypographyProps<T>>
) => {
    const {variant = 'large', color, className, as: Component = 'p', ...rest} = props

    const TypographyComponent = variantClasses[variant] || TypographyStyle.Large

    return <TypographyComponent className={`${color}-color ${className}`} as={Component} {...rest} />
}
