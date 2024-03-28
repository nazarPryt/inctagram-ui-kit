import { ComponentProps, KeyboardEvent, forwardRef } from 'react'

import { CloseIcon, SearchIcon } from '../../icons'
import { Wrapper } from './InputText.styled'

type DefaultInputPropsType = ComponentProps<'input'>

export type InputTextProps = DefaultInputPropsType & {
  error?: string
  label?: string
  onClearClick?: () => void
  onEnter?: (e: KeyboardEvent<HTMLInputElement>) => void
  search?: boolean
}
export const InputText = forwardRef<HTMLInputElement, InputTextProps>(
  ({ error, label, onClearClick, onEnter, onKeyDown, search, value, ...rest }, ref) => {
    const isShowClearButton = onClearClick && value

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
      if (onEnter && e.key === 'Enter') {
        onEnter(e)
      }
      onKeyDown?.(e)
    }

    return (
      <Wrapper $error={!!error?.length} $search={search}>
        <input ref={ref} {...rest} onKeyDown={handleKeyDown} required />
        {search && <span className={'searchIcon'}>{<SearchIcon />}</span>}
        <span className={'highlight'}></span>
        <span className={'bar'}></span>
        <span className={'error'}>{error}</span>
        <label>{label}</label>
        {isShowClearButton && (
          <button className={'clearButton'} onClick={onClearClick} type={'button'}>
            {<CloseIcon />}
          </button>
        )}
      </Wrapper>
    )
  }
)
InputText.displayName = 'InputText' //https://bobbyhadz.com/blog/react-component-is-missing-display-name
