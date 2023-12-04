'use client'
import React, {ComponentProps, forwardRef, useState} from 'react'
import {Wrapper} from '../InputText/InputText.styled'
import {Eye} from '../../assets/icons/Eye'
import {IconButton} from '../IconButton/IconButton'
import {EyeOff} from '../../assets/icons/EyeOff'

type DefaultInputPropsType = ComponentProps<'input'>

type InputProps = DefaultInputPropsType & {
    label?: string
    error?: string
}
export const InputPassword = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    const [see, setSee] = useState(false)

    const handleShowPassword = () => {
        setSee(!see)
    }
    return (
        <Wrapper>
            <input ref={ref} type={see ? 'text' : 'password'} {...props} required />
            <span className='highlight'></span>
            <span className='bar'></span>
            {see ? (
                <IconButton className='eye' onClick={handleShowPassword}>
                    <EyeOff />
                </IconButton>
            ) : (
                <IconButton className='eye' onClick={handleShowPassword}>
                    <Eye />
                </IconButton>
            )}
            <span className='error'>{props.error}</span>
            <label>{props.label}</label>
        </Wrapper>
    )
})
InputPassword.displayName = 'InputPassword' //https://bobbyhadz.com/blog/react-component-is-missing-display-name
