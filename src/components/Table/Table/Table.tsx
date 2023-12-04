import { ComponentProps } from 'react'

import { TableStyled } from './Table.styled'

type TableProps = ComponentProps<'table'>

export const Table = (props: TableProps) => {
  return <TableStyled {...props} />
}
