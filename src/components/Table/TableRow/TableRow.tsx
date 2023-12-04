import { ComponentProps } from 'react'

import { TableRowStyled } from './TableRow.styled'

type TableRowProps = ComponentProps<'tr'>

export const TableRow = (props: TableRowProps) => {
  return <TableRowStyled {...props} />
}
