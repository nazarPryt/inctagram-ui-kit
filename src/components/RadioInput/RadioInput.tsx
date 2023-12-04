import React, {ComponentProps, forwardRef, ReactNode} from 'react'
import RadioCheckedIcon from '../../assets/icons/radio_button_checked.svg'
import RadioUncheckedIcon from '../../assets/icons/radio_button_unchecked.svg'
import {RadioInputWrapper} from './RadioInput.styled'

type DefaultInputPropsType = ComponentProps<'input'>
type RadioType = DefaultInputPropsType & {
    label?: ReactNode
}

export const RadioInput = forwardRef<HTMLInputElement, RadioType>((props, ref) => {
    const {label, checked, ...rest} = props
    return (
        <RadioInputWrapper>
            <input ref={ref} checked={checked} type='radio' {...rest} />
            <div className={'radioIcon'}>{checked ? <RadioCheckedIcon /> : <RadioUncheckedIcon />}</div>
            {label}
        </RadioInputWrapper>
    )
})
RadioInput.displayName = 'RadioInput'
