import React, {ComponentProps, ComponentPropsWithoutRef, forwardRef, ReactNode} from 'react'
import {NavButtonWrapper} from 'widgets/Aside/ui/NavButton/NavButton.styled'
import {InputText} from 'shared/ui/InputText/InputText'

type PopoverItemProps = {
    name: string
    icon: ReactNode
} & ComponentProps<'button'>

export const PopoverItem = forwardRef<HTMLButtonElement, PopoverItemProps>((props, ref) => {
    return (
        <NavButtonWrapper ref={ref} {...props} onClick={props.onClick}>
            {props.icon}
            <span>{props.name}</span>
        </NavButtonWrapper>
    )
})

PopoverItem.displayName = 'PopoverItem'
