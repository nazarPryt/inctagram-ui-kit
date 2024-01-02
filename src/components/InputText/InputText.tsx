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
  ({ onClearClick, search, ...props }, ref) => {
    const isShowClearButton = onClearClick && props.value

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
      if (props.onEnter && e.key === 'Enter') {
        props.onEnter(e)
      }
      props.onKeyDown?.(e)
    }

    return (
      <Wrapper $search={search}>
        <input ref={ref} {...props} onKeyDown={handleKeyDown} required />
        {search && <span className={'searchIcon'}>{<SearchIcon />}</span>}
        <span className={'highlight'}></span>
        <span className={'bar'}></span>
        <span className={'error'}>{props.error}</span>
        <label>{props.label}</label>
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
