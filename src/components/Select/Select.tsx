import { ComponentProps, ReactNode, forwardRef } from 'react'

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
  placeholder?: string
}
export type SelectProps = CommonProps & ConditionalMultipleProps

export const Select = ({
  defaultValue,
  disabled,
  onChange,
  options,
  placeholder,
  value,
}: SelectProps) => {
  const triggerValue = options.find(el => el.value === value)?.label

  // useEffect(() => {
  //   // document.body.style.overflow = 'hidden'
  //   // return () => {
  //   //     document.body.style.overflow = 'auto'
  //   // }
  // }, [])

  return (
    <SelectWrapper>
      <RadixSelect.Root defaultValue={defaultValue} disabled={disabled} onValueChange={onChange}>
        <SelectTrigger style={{ margin: 0 }}>
          <RadixSelect.Value placeholder={placeholder || ''}>{triggerValue}</RadixSelect.Value>
          <SelectIcon>
            <ArrowDown />
          </SelectIcon>
        </SelectTrigger>
        <SelectContent position={'popper'} style={{ margin: 0 }}>
          {options.map(option => (
            <SelectItem key={option.value} value={option.value}>
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
