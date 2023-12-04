import { ComponentPropsWithoutRef, ReactNode, forwardRef } from 'react'

import { IconButtonStyled } from './IconButton.styled'

type DefaultButtonPropsType = ComponentPropsWithoutRef<'button'>

export type IconButtonType = DefaultButtonPropsType & {
  active?: boolean
  children: ReactNode
  colorful?: boolean
}
export const IconButton = forwardRef<HTMLButtonElement, IconButtonType>((props, ref) => {
  return (
    <IconButtonStyled
      active={props.active}
      colorful={props.colorful}
      ref={ref}
      type={'button'}
      {...props}
    >
      {props.children}
    </IconButtonStyled>
  )
})

IconButton.displayName = 'IconButton'
