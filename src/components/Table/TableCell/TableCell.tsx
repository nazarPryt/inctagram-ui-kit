import React, {ComponentProps} from 'react'
import {TableCellStyled} from 'shared/ui/Table/TableCell/TableCell.styled'

type TableCellProps = ComponentProps<'td'>

export const TableCell = (props: TableCellProps) => {
    return <TableCellStyled {...props} />
}
