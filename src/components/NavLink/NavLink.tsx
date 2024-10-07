import { ComponentProps, ReactNode } from 'react'

import Link from 'next/link'

import { NavIconWrapper, NavLinkWrapper } from './NavLink.styled'

type DefaultLinkPropsType = Omit<ComponentProps<typeof Link>, 'href'>

type NavLinkProps = {
  href: string
  icon: ReactNode
  name: string
  pathname: string
} & DefaultLinkPropsType

export const NavLink = ({ href, icon, name, pathname, ...rest }: NavLinkProps) => {
  const isActive = pathname === href

  return (
    <NavLinkWrapper $active={isActive} href={href} {...rest}>
      <NavIconWrapper $active={isActive}>{icon}</NavIconWrapper>
      <span>{name}</span>
    </NavLinkWrapper>
  )
}
