import { ComponentPropsWithoutRef, Dispatch, ReactNode, SetStateAction } from 'react'

import { IconButton } from '../IconButton'
import { PopoverContentWrapper, PopoverWrapper } from './Popover.styled'

export type PopoverContentProps = {
  children: ReactNode
  icon: ReactNode
  isPopoverOpen: boolean
  onActionHandler?: () => void
  setIsPopoverOpen: Dispatch<SetStateAction<boolean>>
} & ComponentPropsWithoutRef<'div'>

export const Popover = ({
  children,
  icon,
  isPopoverOpen,
  onActionHandler,
  setIsPopoverOpen,
  ...rest
}: PopoverContentProps) => {
  const handleTogglePopover = () => {
    setIsPopoverOpen(prevIsOpen => !prevIsOpen)
  }

  return (
    <PopoverWrapper id={'popoverWrapper'} {...rest}>
      <IconButton active={isPopoverOpen} onClick={handleTogglePopover}>
        {icon}
      </IconButton>
      {isPopoverOpen && <PopoverContentWrapper>{children}</PopoverContentWrapper>}
    </PopoverWrapper>
  )
}
