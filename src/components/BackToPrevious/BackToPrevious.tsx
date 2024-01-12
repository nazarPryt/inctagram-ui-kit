import { ComponentPropsWithoutRef } from 'react'

import { LinkProps } from 'next/link'

import { ArrowLeft } from '../../icons'
import { BackToPreviousWrapper } from './BackToPrevious.styled'

export type BackToPreviousType = {
  title: string
} & LinkProps &
  Omit<ComponentPropsWithoutRef<'a'>, 'href' | 'title'>

export const BackToPrevious = ({ title, ...rest }: BackToPreviousType) => {
  return (
    <BackToPreviousWrapper {...rest}>
      <ArrowLeft />
      <span>{title}</span>
    </BackToPreviousWrapper>
  )
}
