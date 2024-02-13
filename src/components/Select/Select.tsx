import { CSSProperties, Fragment, ReactNode, useMemo } from 'react'

import { Listbox } from '@headlessui/react'
import { Float } from '@headlessui-float/react'
import { clsx } from 'clsx'

import { ArrowDown } from '../../icons'
import { Label } from '../Label'
import { Scrollbar } from '../Scrollbar'
import { SelectContent, SelectIcon, SelectItem, SelectRoot, SelectTrigger } from './Select.styled'

export type SelectOptionType =
  | { disabled?: boolean; icon?: ReactNode; label: number; value: number }
  | { disabled?: boolean; icon?: ReactNode; label: number; value: string }
  | { disabled?: boolean; icon?: ReactNode; label: string; value: number }
  | { disabled?: boolean; icon?: ReactNode; label: string; value: string }

interface CommonProps {
  /** applied to the trigger */
  className?: string
  disabled?: boolean
  errorMessage?: string
  label?: string
  /** The name of the select. Submitted with its owning form as part of a name/value pair. */
  name?: string
  /** The options to display.
   * {label: string, value: string | number} */
  options: Array<SelectOptionType>
  placeholder?: string
  portal?: boolean
  required?: boolean
  rootClassName?: string
  variant?: 'pagination' | 'primary' | 'secondary'
  width?: CSSProperties['width']
}

type ConditionalMultipleProps =
  | {
      multiple?: false
      /** Event handler called when the value changes.
       * The parameter is an Option object or an array of Options depending on the multiple prop.
       */
      onChange: (value: string) => void
      value: string
    }
  | {
      multiple?: false
      onChange: (value: number) => void
      value: number
    }
  | {
      multiple?: true
      /** Event handler called when the value changes.
       * The parameter is an Option object or an array of Options depending on the multiple prop.
       */
      onChange: (value: Array<number>) => void
      value: Array<number>
    }
  | {
      multiple?: true
      onChange: (value: Array<string>) => void
      value: Array<string>
    }

export type SelectProps = CommonProps & ConditionalMultipleProps

export const Select = ({
  className,
  disabled,
  errorMessage,
  label,
  multiple = false,
  onChange,
  options,
  placeholder,
  portal = true,
  rootClassName,
  value,
  variant = 'primary',
  width = '100%',
}: SelectProps) => {
  const isSecondary = variant === 'secondary'
  const showError = !!errorMessage && errorMessage.length > 0

  const optionsMap: Record<any | number | string, any | number | string> = useMemo(() => {
    return options.reduce(
      (acc, option) => {
        console.log('-- option', option)
        acc[option.value] = option.label
        if (option.icon) {
          acc.icon = option.icon
        }

        return acc
      },
      {} as Record<any | number | string, any | number | string>
    )
  }, [options])

  // console.log('optionsMap', optionsMap)
  const classNames = {
    content: clsx('content', isSecondary && 'secondary'),
    icon: clsx('icon', [variant]),
    item: clsx('item', [variant]),
    label: 'label',
    popper: 'popper',
    root: rootClassName,
    scrollRoot: 'scrollRoot',
    scrollThumb: 'scrollThumb',
    scrollViewport: 'scrollViewport',
    scrollbar: 'scrollbar',
    trigger: clsx('trigger', showError && 'error', [variant], className),
    value: 'value',
  }
  const selectedOptionsLabels = Array.isArray(value)
    ? value.map(v => optionsMap[v]).join(', ')
    : optionsMap[value]

  // console.log('selectedOptionsLabels', selectedOptionsLabels)
  const rootStyles = { width }

  return (
    <Listbox {...{ disabled, multiple, onChange, value }}>
      <SelectRoot className={rootClassName} style={rootStyles}>
        <Label label={label}>
          <Float
            adaptiveWidth
            as={'div'}
            flip={20}
            floatingAs={Fragment}
            placement={'bottom'}
            portal={portal}
          >
            <SelectTrigger>
              <Listbox.Button className={classNames.trigger} type={'button'}>
                <span>{}</span>
                <span className={classNames.value}>{selectedOptionsLabels || placeholder}</span>
                <SelectIcon className={classNames.icon}>
                  <ArrowDown />
                </SelectIcon>
              </Listbox.Button>
            </SelectTrigger>

            <SelectContent>
              <Listbox.Options as={'div'} className={classNames.content}>
                <Scrollbar maxHeight={158}>
                  {options.map(option => {
                    return (
                      <SelectItem key={option.value}>
                        <Listbox.Option
                          as={'button'}
                          className={classNames.item}
                          disabled={option.disabled}
                          type={'button'}
                          value={option.value}
                        >
                          <span>{option.icon}</span>
                          <span>{option.label}</span>
                        </Listbox.Option>
                      </SelectItem>
                    )
                  })}
                </Scrollbar>
              </Listbox.Options>
            </SelectContent>
          </Float>
        </Label>
        <>{showError && <p>{errorMessage}</p>}</>
      </SelectRoot>
    </Listbox>
  )
}
