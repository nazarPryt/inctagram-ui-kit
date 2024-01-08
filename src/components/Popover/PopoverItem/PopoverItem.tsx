import { ComponentProps, ReactNode, forwardRef } from 'react'

import { PopoverItemWrapper } from './PopoverItem.styled'

export type PopoverItemProps = {
  icon: ReactNode
  name: string
} & ComponentProps<'button'>

export const PopoverItem = forwardRef<HTMLButtonElement, PopoverItemProps>(
  ({ icon, name, onClick, ...rest }, ref) => {
    return (
      <PopoverItemWrapper ref={ref} {...rest} onClick={onClick}>
        {icon}
        <span>{name}</span>
      </PopoverItemWrapper>
    )
  }
)

PopoverItem.displayName = 'PopoverItem'
