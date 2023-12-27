import { ComponentProps, ReactNode } from 'react'

import Link from 'next/link'

import { NavIconWrapper, NavLinkWrapper } from './NavLink.styled'

type DefaultLinkPropsType = ComponentProps<typeof Link>

type NavLinkProps = DefaultLinkPropsType & {
  icon: ReactNode
  name: string
  pathname: string
}

export const NavLink = (props: NavLinkProps) => {
  const isActive = props.pathname === props.href

  return (
    <NavLinkWrapper {...props} $active={isActive}>
      <NavIconWrapper $active={isActive}>{props.icon}</NavIconWrapper>
      {props.name}
    </NavLinkWrapper>
  )
}
