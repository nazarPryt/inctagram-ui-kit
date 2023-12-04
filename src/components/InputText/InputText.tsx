import { ComponentProps, forwardRef } from 'react'

import { Wrapper } from './InputText.styled'

type DefaultInputPropsType = ComponentProps<'input'>

export type InputTextProps = DefaultInputPropsType & {
  error?: string
  label?: string
}
export const InputText = forwardRef<HTMLInputElement, InputTextProps>((props, ref) => {
  return (
    <Wrapper>
      <input ref={ref} {...props} required />
      <span className={'highlight'}></span>
      <span className={'bar'}></span>
      <span className={'error'}>{props.error}</span>
      <label>{props.label}</label>
    </Wrapper>
  )
})
InputText.displayName = 'InputText' //https://bobbyhadz.com/blog/react-component-is-missing-display-name
