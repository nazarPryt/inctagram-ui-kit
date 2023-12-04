import React, {ComponentProps} from 'react'
import {TableHeadStyled} from 'shared/ui/Table/TableHead/TableHead.styled'

type TableHeadProps = ComponentProps<'thead'>

export const TableHead = (props: TableHeadProps) => {
    return <TableHeadStyled {...props} />
}
