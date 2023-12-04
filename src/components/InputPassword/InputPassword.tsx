import { ComponentProps, forwardRef, useState } from 'react'

import { IconButton } from '../IconButton'
import { Wrapper } from '../InputText/InputText.styled'
import { Eye } from './icons/Eye'
import { EyeOff } from './icons/EyeOff'

type DefaultInputPropsType = ComponentProps<'input'>

type InputProps = DefaultInputPropsType & {
  error?: string
  label?: string
}
export const InputPassword = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const [see, setSee] = useState(false)

  const handleShowPassword = () => {
    setSee(!see)
  }

  return (
    <Wrapper>
      <input ref={ref} type={see ? 'text' : 'password'} {...props} required />
      <span className={'highlight'}></span>
      <span className={'bar'}></span>
      {see ? (
        <IconButton className={'eye'} onClick={handleShowPassword}>
          <EyeOff />
        </IconButton>
      ) : (
        <IconButton className={'eye'} onClick={handleShowPassword}>
          <Eye />
        </IconButton>
      )}
      <span className={'error'}>{props.error}</span>
      <label>{props.label}</label>
    </Wrapper>
  )
})
InputPassword.displayName = 'InputPassword' //https://bobbyhadz.com/blog/react-component-is-missing-display-name
