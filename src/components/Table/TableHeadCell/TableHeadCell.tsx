import { ComponentProps } from 'react'

import { TableHeadCellStyled } from './TableHeadCell.styled'

type TableHeadCellProps = ComponentProps<'th'>

export const TableHeadCell = (props: TableHeadCellProps) => {
  return <TableHeadCellStyled {...props} />
}
