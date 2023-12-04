import { ComponentPropsWithoutRef, ElementType } from 'react'

import { TypographyStyle } from './Typography.styled'

export type TypographyProps<T extends ElementType = 'p'> = {
  as?: T
  className?: string
  color?: 'error' | 'inherit' | 'primary' | 'secondary'
  variant:
    | 'Bold_text_16'
    | 'Medium_text_14'
    | 'bold_text_14'
    | 'error'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'large'
    | 'regular_link'
    | 'regular_text_14'
    | 'regular_text_16'
    | 'semi_bold_small_text'
    | 'small_link'
    | 'small_text'
} & ComponentPropsWithoutRef<T>

type VariantClassesType = {
  [key in TypographyProps['variant']]: ElementType
}

const variantClasses: VariantClassesType = {
  Bold_text_16: TypographyStyle.BoldText16,
  Medium_text_14: TypographyStyle.MediumText14,
  bold_text_14: TypographyStyle.BoldText14,
  error: TypographyStyle.Error,
  h1: TypographyStyle.H1,
  h2: TypographyStyle.H2,
  h3: TypographyStyle.H3,
  large: TypographyStyle.Large,
  regular_link: TypographyStyle.RegularLink,
  regular_text_14: TypographyStyle.RegularText14,
  regular_text_16: TypographyStyle.RegularText16,
  semi_bold_small_text: TypographyStyle.SemiBoldSmallText,
  small_link: TypographyStyle.SmallLink,
  small_text: TypographyStyle.SmallText,
}

export const Typography = <T extends ElementType = 'p'>(
  props: TypographyProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof TypographyProps<T>>
) => {
  const { as: Component = 'p', className, color, variant = 'large', ...rest } = props

  const TypographyComponent = variantClasses[variant] || TypographyStyle.Large

  return <TypographyComponent as={Component} className={`${color}-color ${className}`} {...rest} />
}
