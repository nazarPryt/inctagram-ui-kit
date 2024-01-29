import { Dispatch, ReactNode, SetStateAction } from 'react'

import * as PopoverRadix from '@radix-ui/react-popover'

import { IconButton } from '../IconButton'
import { PopoverContent } from './Popover.styled'

export type PopoverType = {
  children: ReactNode
  icon: ReactNode
  isOpen: boolean
  onOpenChange: Dispatch<SetStateAction<boolean>>
}
//https://www.radix-ui.com/primitives/docs/components/popover

export const Popover = ({ children, icon, isOpen, onOpenChange }: PopoverType) => {
  return (
    <PopoverRadix.Root onOpenChange={onOpenChange} open={isOpen}>
      <PopoverRadix.Trigger asChild>
        <IconButton active={isOpen}>{icon}</IconButton>
      </PopoverRadix.Trigger>
      <PopoverRadix.Portal>
        <PopoverContent>{children}</PopoverContent>
      </PopoverRadix.Portal>
    </PopoverRadix.Root>
  )
}
