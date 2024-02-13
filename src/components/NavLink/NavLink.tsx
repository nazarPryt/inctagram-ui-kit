import { ComponentProps, ReactNode } from 'react'

import Link from 'next/link'

import { NavIconWrapper, NavLinkWrapper } from './NavLink.styled'

type DefaultLinkPropsType = ComponentProps<typeof Link>

type NavLinkProps = DefaultLinkPropsType & {
  icon: ReactNode
  name: string
  pathname: string
}

export const NavLink = ({ href, icon, name, pathname, ...rest }: NavLinkProps) => {
  const isActive = pathname === href

  return (
    <NavLinkWrapper $active={isActive} href={href} {...rest}>
      <NavIconWrapper $active={isActive}>{icon}</NavIconWrapper>
      {name}
    </NavLinkWrapper>
  )
}
