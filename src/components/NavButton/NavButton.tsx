import { ComponentProps, ReactNode, forwardRef } from 'react'

import { NavButtonWrapper } from './NavButton.styled'

type NavButtonType = ComponentProps<'button'> & {
  icon: ReactNode
  title: string
}

export const NavButton = forwardRef<HTMLButtonElement, NavButtonType>((props, ref) => {
  return (
    <NavButtonWrapper ref={ref} {...props}>
      {props.icon}
      {props.title}
    </NavButtonWrapper>
  )
})
NavButton.displayName = 'NavButton'
