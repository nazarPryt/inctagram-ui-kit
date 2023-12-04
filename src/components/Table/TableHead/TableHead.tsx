import { ComponentProps } from 'react'

import { TableHeadStyled } from './TableHead.styled'

type TableHeadProps = ComponentProps<'thead'>

export const TableHead = (props: TableHeadProps) => {
  return <TableHeadStyled {...props} />
}
