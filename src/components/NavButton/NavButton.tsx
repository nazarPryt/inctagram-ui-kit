import { ComponentProps, ReactNode, forwardRef } from 'react'

import { NavButtonWrapper } from './NavButton.styled'

type NavButtonType = ComponentProps<'button'> & {
  icon: ReactNode
  title: string
}

export const NavButton = forwardRef<HTMLButtonElement, NavButtonType>(
  ({ icon, title, ...props }, ref) => {
    return (
      <NavButtonWrapper ref={ref} {...props}>
        {icon}
        {title}
      </NavButtonWrapper>
    )
  }
)
NavButton.displayName = 'NavButton'
