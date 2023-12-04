import { ComponentProps } from 'react'

import { TableCellStyled } from './TableCell.styled'

type TableCellProps = ComponentProps<'td'>

export const TableCell = (props: TableCellProps) => {
  return <TableCellStyled {...props} />
}
