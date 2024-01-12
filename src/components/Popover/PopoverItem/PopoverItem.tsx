import { ComponentProps, ElementType, ReactNode } from 'react'

import { PopoverItemWrapper } from './PopoverItem.styled'

const ButtonDefaultAs = 'button' as const

type ButtonDefaultAsType = typeof ButtonDefaultAs
type ButtonOwnProps<E extends ElementType> = {
  as?: E
  icon: ReactNode
  name: string
}

export type PopoverItemProps<E extends ElementType> = ButtonOwnProps<E> &
  Omit<ComponentProps<E>, keyof ButtonOwnProps<E>>

export const PopoverItem = <E extends ElementType = ButtonDefaultAsType>({
  as,
  icon,
  name,
  ...otherProps
}: PopoverItemProps<E>) => {
  const Tag = as || ButtonDefaultAs

  return (
    <PopoverItemWrapper as={Tag} {...otherProps}>
      {icon}
      <span>{name}</span>
    </PopoverItemWrapper>
  )
}
