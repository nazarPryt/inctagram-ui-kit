import React, {ComponentProps} from 'react'
import {TableHeadCellStyled} from 'shared/ui/Table/TableHeadCell/TableHeadCell.styled'

type TableHeadCellProps = ComponentProps<'th'>

export const TableHeadCell = (props: TableHeadCellProps) => {
    return <TableHeadCellStyled {...props} />
}
