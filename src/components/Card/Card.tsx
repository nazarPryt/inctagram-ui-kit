import { ComponentPropsWithoutRef } from 'react'

import { CardStyled } from './Card.styled'

export type CardType = ComponentPropsWithoutRef<'div'>

export const Card = ({ ...rest }: CardType) => {
  return <CardStyled {...rest} />
}
