import { ComponentPropsWithoutRef, ReactNode, forwardRef } from 'react'

import { IconButtonStyled } from './IconButton.styled'

type DefaultButtonPropsType = ComponentPropsWithoutRef<'button'>

export type IconButtonType = DefaultButtonPropsType & {
  active?: boolean
  children: ReactNode
  colorful?: boolean
}
export const IconButton = forwardRef<HTMLButtonElement, IconButtonType>(
  ({ active, children, colorful, ...rest }, ref) => {
    return (
      <IconButtonStyled $active={active} $colorful={colorful} ref={ref} type={'button'} {...rest}>
        {children}
      </IconButtonStyled>
    )
  }
)

IconButton.displayName = 'IconButton'
