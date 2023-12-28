import { ComponentPropsWithoutRef, FC, ReactNode } from 'react'

import * as LabelRadixUI from '@radix-ui/react-label'

import { LabelStyled } from './Label.styled'

export type LabelProps = {
  label?: ReactNode
} & ComponentPropsWithoutRef<'label'>

export const Label: FC<LabelProps> = ({ children, className, label, ...rest }) => {
  return (
    <LabelRadixUI.Root {...rest}>
      {label && <LabelStyled className={className}>{label}</LabelStyled>}
      {children}
    </LabelRadixUI.Root>
  )
}
