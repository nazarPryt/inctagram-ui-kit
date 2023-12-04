import React, {ComponentProps} from 'react'
import {TableRowStyled} from 'shared/ui/Table/TableRow/TableRow.styled'

type TableRowProps = ComponentProps<'tr'>

export const TableRow = (props: TableRowProps) => {
    return <TableRowStyled {...props} />
}
