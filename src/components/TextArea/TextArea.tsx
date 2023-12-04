import React, {ComponentProps, forwardRef} from 'react'
import {Wrapper} from '../InputText/InputText.styled'

type DefaultTextareaPropsType = ComponentProps<'textarea'>

type TextareaProps = DefaultTextareaPropsType & {
    label?: string
    error?: string
}
export const TextArea = forwardRef<HTMLTextAreaElement, TextareaProps>((props, ref) => {
    return (
        <Wrapper>
            <textarea ref={ref} {...props} required />
            <span className='highlight'></span>
            <span className='bar'></span>
            <label>{props.label}</label>
        </Wrapper>
    )
})
TextArea.displayName = 'TextArea' //https://bobbyhadz.com/blog/react-component-is-missing-display-name
