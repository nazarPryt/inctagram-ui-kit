import React, {ComponentProps} from 'react'
import {TableStyled} from 'shared/ui/Table/Table/Table.styled'

type TableProps = ComponentProps<'table'>

export const Table = (props: TableProps) => {
    return <TableStyled {...props} />
}
