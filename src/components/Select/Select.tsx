import { CSSProperties, Fragment, useMemo } from 'react'

import { Listbox } from '@headlessui/react'
import { Float } from '@headlessui-float/react'

import { ArrowDown } from '../../icons'
import { Label } from '../Label'
import { Scrollbar } from '../Scrollbar'
import { SelectStyled } from './Select.styled'

type Option =
  | { disabled?: boolean; label: number; value: number }
  | { disabled?: boolean; label: number; value: string }
  | { disabled?: boolean; label: string; value: number }
  | { disabled?: boolean; label: string; value: string }

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
  options: Array<Option>
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

  const optionsMap: Record<number | string, number | string> = useMemo(() => {
    return options.reduce(
      (acc, option) => {
        acc[option.value] = option.label

        return acc
      },
      {} as Record<number | string, number | string>
    )
  }, [options])

  const selectedOptionsLabels = Array.isArray(value)
    ? value.map(v => optionsMap[v]).join(', ')
    : optionsMap[value]

  const rootStyles = { width }

  return (
    <Listbox {...{ disabled, multiple, onChange, value }}>
      <SelectStyled className={rootClassName} style={rootStyles}>
        <Label label={label}>
          <Float
            adaptiveWidth
            as={'div'}
            flip={20}
            floatingAs={Fragment}
            placement={'bottom'}
            portal={portal}
          >
            <Listbox.Button className={`trigger ${className}`} type={'button'}>
              <span className={'value'}>{selectedOptionsLabels || placeholder}</span>
              <span className={'icon'}>
                {/*<ArrowDown size={variant === 'pagination' ? 16 : 24} />*/}
                <ArrowDown />
              </span>
            </Listbox.Button>

            <Listbox.Options as={'div'} className={`content ${isSecondary}`}>
              <Scrollbar maxHeight={158}>
                {options.map(option => {
                  return (
                    <Listbox.Option
                      as={'button'}
                      className={'item'}
                      disabled={option.disabled}
                      key={option.value}
                      type={'button'}
                      value={option.value}
                    >
                      <span>{option.label}</span>
                    </Listbox.Option>
                  )
                })}
              </Scrollbar>
            </Listbox.Options>
          </Float>
        </Label>
        <>{showError && <span>{errorMessage}</span>}</>
      </SelectStyled>
    </Listbox>
  )
}
