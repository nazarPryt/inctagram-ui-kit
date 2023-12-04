import { ComponentProps, ReactNode, forwardRef } from 'react'

import { CheckboxWrapper } from './Checkbox.styled'
import { CheckedIcon } from './icons/CheckedIcon'
import { UncheckedIcon } from './icons/UncheckedIcon'

type DefaultInputPropsType = ComponentProps<'input'>
type CheckboxType = DefaultInputPropsType & {
  label?: ReactNode
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxType>((props, ref) => {
  const { checked, label, ...rest } = props

  return (
    <CheckboxWrapper>
      <input checked={checked} ref={ref} type={'checkbox'} {...rest} />
      <div className={'checkboxIcon'}>{checked ? <CheckedIcon /> : <UncheckedIcon />}</div>
      {label}
    </CheckboxWrapper>
  )
})
Checkbox.displayName = 'Checkbox'
