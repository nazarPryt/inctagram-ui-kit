import { ComponentProps, FC, ReactNode, forwardRef, useEffect } from 'react'

import * as Select from '@radix-ui/react-select'

import { ArrowDownIcon } from '../../assets/icons/ArrowDownIcon'
import { Typography } from '../Typography'
import {
  SelectContent,
  SelectIcon,
  SelectTrigger,
  SelectWrapper,
  StyledItem,
} from './Select.styled'

export type Option = { label: ReactNode | string; value: string }

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

export const CustomSelect: FC<SelectProps> = ({
  defaultValue,
  disabled,
  label,
  onChange,
  options,
  placeholder,
  value,
}) => {
  const triggerValue = options.find(el => el.value === value)?.label

  useEffect(() => {
    // document.body.style.overflow = 'hidden'
    // return () => {
    //     document.body.style.overflow = 'auto'
    // }
  }, [])

  return (
    <SelectWrapper>
      <Typography as={'label'} variant={'regular_text_14'}>
        {label}
      </Typography>
      <Select.Root defaultValue={defaultValue} disabled={disabled} onValueChange={onChange}>
        <SelectTrigger style={{ margin: 0 }}>
          <Select.Value placeholder={placeholder || ''}>{triggerValue}</Select.Value>
          <SelectIcon>
            <ArrowDownIcon />
          </SelectIcon>
        </SelectTrigger>
        <SelectContent position={'popper'} style={{ margin: 0 }}>
          {options.map((option, i) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select.Root>
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
