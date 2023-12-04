import * as Select from '@radix-ui/react-select'
import {ComponentProps, FC, forwardRef, ReactNode, useEffect} from 'react'
import {ArrowDownIcon} from '../../assets/icons/ArrowDownIcon'
import {Typography} from '../Typography'
import {SelectContent, SelectIcon, SelectTrigger, SelectWrapper, StyledItem} from './Select.styled'

export type Option = {label: string | ReactNode; value: string}

type ConditionalMultipleProps = {
    multiple?: true
    value: string
    onChange: (value: string) => void
}

type CommonProps = {
    disabled?: boolean
    placeholder?: string
    options: Array<Option>
    label?: string
    defaultValue?: string
}
export type SelectProps = CommonProps & ConditionalMultipleProps

export const CustomSelect: FC<SelectProps> = ({
    placeholder,
    value,
    options,
    label,
    defaultValue,
    disabled,
    onChange,
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
            <Typography variant={'regular_text_14'} as='label'>
                {label}
            </Typography>
            <Select.Root disabled={disabled} onValueChange={onChange} defaultValue={defaultValue}>
                <SelectTrigger style={{margin: 0}}>
                    <Select.Value placeholder={placeholder || ''}>{triggerValue}</Select.Value>
                    <SelectIcon>
                        <ArrowDownIcon />
                    </SelectIcon>
                </SelectTrigger>
                <SelectContent style={{margin: 0}} position={'popper'}>
                    {options.map((option, i) => (
                        <SelectItem value={option.value} key={option.value}>
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

const SelectItem = forwardRef<HTMLDivElement, SelectItemType>(({children, ...props}, ref) => {
    return (
        <StyledItem {...props} ref={ref}>
            {children}
        </StyledItem>
    )
})
SelectItem.displayName = 'SelectItem'
