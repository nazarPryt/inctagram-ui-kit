import { CSSProperties, ComponentProps, ReactNode, forwardRef } from 'react'

import * as RadixSelect from '@radix-ui/react-select'
import clsx from 'clsx'

import { ArrowDown } from '../../icons'
import { Label } from '../Label'
import {
  SelectContent,
  SelectIcon,
  SelectTrigger,
  SelectWrapper,
  StyledItem,
} from './Select.styled'

export type SelectOption = { label: ReactNode | string; value: number | string }

type PaginationConditionals =
  | {
      onPerPageChange: (itemPerPage: number) => void
      perPage: number
      perPageOptions: number[]
    }
  | {
      onPerPageChange?: never
      perPage?: null
      perPageOptions?: never
    }

type ConditionalMultipleProps = {
  multiple?: true
  onChange: (value: string) => void
  value: string
}

type CommonProps = {
  className?: string
  defaultValue?: string
  disabled?: boolean
  errorMessage?: string
  label?: string
  options: Array<SelectOption>
  placeholder?: ReactNode | string
  rootClassName?: string
  variant?: 'pagination' | 'primary'
  width?: CSSProperties['width']
} & PaginationConditionals
export type SelectProps = CommonProps & ConditionalMultipleProps

//https://www.radix-ui.com/primitives/docs/components/select

export const Select = ({
  className,
  defaultValue,
  disabled,
  errorMessage,
  label,
  onChange,
  options,
  placeholder,
  rootClassName,
  value,
  variant = 'primary',
  width,
}: SelectProps) => {
  const triggerValue = options.find(el => el.value === value)?.label
  const showError = !!errorMessage && errorMessage.length > 0
  const rootStyles = { width }

  const classNames = {
    content: clsx('content', variant),
    icon: clsx('icon', variant),
    item: clsx('item', variant),
    label: clsx('label', disabled && 'disabled'),
    root: rootClassName,
    trigger: clsx('trigger', variant, showError && 'error', className),
  }
  const withoutPlaceholder = options[0].label

  // useEffect(() => {
  //   // document.body.style.overflow = 'hidden'
  //   // return () => {
  //   //     document.body.style.overflow = 'auto'
  //   // }
  // }, [])

  return (
    <SelectWrapper>
      <Label>{label}</Label>
      <RadixSelect.Root defaultValue={defaultValue} disabled={disabled} onValueChange={onChange}>
        <SelectTrigger className={classNames.trigger} style={rootStyles}>
          <RadixSelect.Value placeholder={placeholder || withoutPlaceholder}>
            {triggerValue}
          </RadixSelect.Value>
          <SelectIcon className={classNames.icon}>
            <ArrowDown />
          </SelectIcon>
        </SelectTrigger>
        <SelectContent className={classNames.content} position={'popper'}>
          {options.map(option => (
            <SelectItem className={classNames.item} key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
        {showError && <span className={'error'}>{errorMessage}</span>}
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
