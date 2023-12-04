import React, {ComponentPropsWithoutRef, Dispatch, FC, ReactNode, SetStateAction} from 'react'
import {PopoverContentWrapper, PopoverWrapper} from './Popover.styled'
import {IconButton} from '../IconButton/IconButton'

type PopoverContentProps = {
    onActionHandler?: () => void
    children: ReactNode
    setIsPopoverOpen: Dispatch<SetStateAction<boolean>>
    isPopoverOpen: boolean
    icon: ReactNode
} & ComponentPropsWithoutRef<'div'>

export const Popover: FC<PopoverContentProps> = props => {
    const {onActionHandler, icon, isPopoverOpen, setIsPopoverOpen, children, ...rest} = props
    const handleTogglePopover = () => {
        setIsPopoverOpen(prevIsOpen => !prevIsOpen)
    }

    return (
        <PopoverWrapper id='popoverWrapper' {...rest}>
            <IconButton active={isPopoverOpen} onClick={handleTogglePopover}>
                {icon}
            </IconButton>
            {isPopoverOpen && <PopoverContentWrapper>{children}</PopoverContentWrapper>}
        </PopoverWrapper>
    )
}
