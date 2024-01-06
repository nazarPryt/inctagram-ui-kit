import { ComponentProps, ReactNode, forwardRef } from 'react'

import { PopoverItemWrapper } from './PopoverItem.styled'

export type PopoverItemProps = {
  icon: ReactNode
  name: string
} & ComponentProps<'button'>

export const PopoverItem = forwardRef<HTMLButtonElement, PopoverItemProps>((props, ref) => {
  return (
    <PopoverItemWrapper ref={ref} {...props} onClick={props.onClick}>
      {props.icon}
      <span>{props.name}</span>
    </PopoverItemWrapper>
  )
})

PopoverItem.displayName = 'PopoverItem'
