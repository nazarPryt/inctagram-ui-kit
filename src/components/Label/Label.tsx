import { ComponentPropsWithoutRef, ReactNode } from 'react'

import * as LabelRadixUI from '@radix-ui/react-label'

import { LabelStyled } from './Label.styled'

export type LabelProps = {
  label?: ReactNode
} & ComponentPropsWithoutRef<'label'>

export const Label = ({ children, className, label, ...rest }: LabelProps) => {
  return (
    <LabelRadixUI.Root {...rest}>
      {label && <LabelStyled className={className}>{label}</LabelStyled>}
      {children}
    </LabelRadixUI.Root>
  )
}
