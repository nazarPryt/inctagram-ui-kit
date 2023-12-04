import { ComponentProps, ReactNode, forwardRef } from 'react'

import { RadioInputWrapper } from './RadioInput.styled'
import { RadioButtonCheckedIcon } from './icons/RadioButtonCheckedIcon'
import { RadioButtonUnCheckedIcon } from './icons/RadioButtonUnCheckedIcon'

type DefaultInputPropsType = ComponentProps<'input'>
export type RadioType = DefaultInputPropsType & {
  label?: ReactNode
}

export const RadioInput = forwardRef<HTMLInputElement, RadioType>((props, ref) => {
  const { checked, label, ...rest } = props

  return (
    <RadioInputWrapper>
      <input checked={checked} ref={ref} type={'radio'} {...rest} />
      <div className={'radioIcon'}>
        {checked ? <RadioButtonCheckedIcon /> : <RadioButtonUnCheckedIcon />}
      </div>
      {label}
    </RadioInputWrapper>
  )
})
RadioInput.displayName = 'RadioInput'
