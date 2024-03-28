import { ComponentProps, forwardRef } from 'react'

import { Wrapper } from '../InputText/InputText.styled'

export type TextareaProps = {
  error?: string
  label?: string
} & ComponentProps<'textarea'>

export const TextArea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ error, label, maxLength, value, ...rest }, ref) => {
    return (
      <Wrapper $error={!!error?.length}>
        <textarea ref={ref} value={value} {...rest} />
        <span className={'highlight'}></span>
        <span className={'bar'}></span>
        <div className={'box'}>
          <span className={'error'}>{error}</span>
          {maxLength && (
            <span className={'maxLength'}>
              {value?.toString().length}/{maxLength}
            </span>
          )}
        </div>
        <label>{label}</label>
      </Wrapper>
    )
  }
)
TextArea.displayName = 'TextArea' //https://bobbyhadz.com/blog/react-component-is-missing-display-name
