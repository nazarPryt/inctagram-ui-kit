import { ComponentPropsWithoutRef, ReactNode, forwardRef } from 'react'

import { IconButtonStyled } from './IconButton.styled'

type DefaultButtonPropsType = ComponentPropsWithoutRef<'button'>

export type IconButtonType = DefaultButtonPropsType & {
  active?: boolean
  children: ReactNode
  colorful?: boolean
  size?: number
}
export const IconButton = forwardRef<HTMLButtonElement, IconButtonType>(
  ({ active, children, colorful, size = 35, ...rest }, ref) => {
    return (
      <IconButtonStyled
        $active={active}
        $colorful={colorful}
        $size={size}
        ref={ref}
        type={'button'}
        {...rest}
      >
        {children}
      </IconButtonStyled>
    )
  }
)

IconButton.displayName = 'IconButton'
