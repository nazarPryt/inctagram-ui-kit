import { CSSProperties, ComponentProps, ReactNode, forwardRef } from 'react'

import * as RadixSelect from '@radix-ui/react-select'

import { ArrowDown } from '../../icons'
import {
  SelectContent,
  SelectIcon,
  SelectTrigger,
  SelectWrapper,
  StyledItem,
} from './Select.styled'

type Option = { label: ReactNode | string; value: string }

type ConditionalMultipleProps = {
  multiple?: true
  onChange: (value: string) => void
  value: string
}

type CommonProps = {
  defaultValue?: string
  disabled?: boolean
  label?: string
  options: Array<Option>
  placeholder?: ReactNode | string
  variant?: 'pagination' | 'primary'
  width?: CSSProperties['width']
}
export type SelectProps = CommonProps & ConditionalMultipleProps

export const Select = ({
  defaultValue,
  disabled,
  onChange,
  options,
  placeholder,
  value,
  variant = 'primary',
  width,
}: SelectProps) => {
  const triggerValue = options.find(el => el.value === value)?.label

  const rootStyles = { width }
  // useEffect(() => {
  //   // document.body.style.overflow = 'hidden'
  //   // return () => {
  //   //     document.body.style.overflow = 'auto'
  //   // }
  // }, [])

  return (
    <SelectWrapper>
      <RadixSelect.Root defaultValue={defaultValue} disabled={disabled} onValueChange={onChange}>
        <SelectTrigger className={variant} style={rootStyles}>
          <RadixSelect.Value placeholder={placeholder || ''}>{triggerValue}</RadixSelect.Value>
          <SelectIcon className={variant}>
            <ArrowDown />
          </SelectIcon>
        </SelectTrigger>
        <SelectContent className={variant} position={'popper'}>
          {options.map(option => (
            <SelectItem className={variant} key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </RadixSelect.Root>
    </SelectWrapper>
  )
}

type DefaultDivType = ComponentProps<'div'>

type SelectItemType = DefaultDivType & {
  value: any
}

const SelectItem = forwardRef<HTMLDivElement, SelectItemType>(({ children, ...props }, ref) => {
  return (
    <StyledItem {...props} ref={ref}>
      {children}
    </StyledItem>
  )
})

SelectItem.displayName = 'SelectItem'
