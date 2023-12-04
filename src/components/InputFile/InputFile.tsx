import { ComponentProps, forwardRef } from 'react'

import { InputFileWrapper } from './InputFile.styled'

type DefaultInputPropsType = ComponentProps<'input'>

type InputFileProps = DefaultInputPropsType & {
  title: string
}
export const InputFile = forwardRef<HTMLInputElement, InputFileProps>((props, ref) => {
  return (
    <InputFileWrapper htmlFor={'InputFile'}>
      <input id={'InputFile'} ref={ref} type={'file'} {...props} hidden />
      {props.title}
    </InputFileWrapper>
  )
})

InputFile.displayName = 'InputFile'
