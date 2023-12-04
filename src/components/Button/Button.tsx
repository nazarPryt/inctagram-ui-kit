import React, { ComponentPropsWithoutRef, ElementType } from 'react'

import { ComponentButton } from './Button.styled'

export type ButtonVariantType = 'contained' | 'link' | 'outlined' | 'primary' | 'text'

export type ButtonProps<T extends ElementType = 'button'> = {
  asT?: T
  children?: React.ReactNode
  className?: string
  fullwidth?: boolean

  variant?: ButtonVariantType
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>(props: ButtonProps<T>) => {
  const { asT: Component = 'button', className, fullwidth, variant = 'primary', ...rest } = props

  return (
    <ComponentButton
      as={Component}
      className={className}
      fullwidth={fullwidth}
      variant={variant}
      {...rest}
    />
  )
}
