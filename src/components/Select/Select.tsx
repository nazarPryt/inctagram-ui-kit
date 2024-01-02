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

type SelectOption =
  | { disabled?: boolean; label: number; value: number }
  | { disabled?: boolean; label: number; value: string }
  | { disabled?: boolean; label: string; value: number }
  | { disabled?: boolean; label: string; value: string }
  | { label: ReactNode | string; value: number | string }

type ConditionalValueProps =
  | {
      onChange: (value: number) => void
      value: number
    }
  | {
      onChange: (value: string) => void
      value: string
    }

export type SelectProps = {
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
} & ConditionalValueProps

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
      // @ts-ignore
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
