import { ComponentProps, ReactNode } from 'react'

import Link from 'next/link'
import { useRouter } from 'next/router'

import { NavIconWrapper, NavLinkWrapper } from './NavLink.styled'

type DefaultLinkPropsType = ComponentProps<typeof Link>

type NavLinkProps = DefaultLinkPropsType & {
  icon: ReactNode
  name: string
}

export const NavLink = (props: NavLinkProps) => {
  const router = useRouter()
  const isActive = router.pathname === props.href

  return (
    <NavLinkWrapper {...props} $active={isActive}>
      <NavIconWrapper $active={isActive}>{props.icon}</NavIconWrapper>
      {props.name}
    </NavLinkWrapper>
  )
}
