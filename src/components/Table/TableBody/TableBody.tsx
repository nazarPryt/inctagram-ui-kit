import React, {ComponentProps} from 'react'
import {TableBodyStyled} from 'shared/ui/Table/TableBody/TableBody.styled'

type TableBodyProps = ComponentProps<'tbody'>

export const TableBody = (props: TableBodyProps) => {
    return <TableBodyStyled {...props} />
}
