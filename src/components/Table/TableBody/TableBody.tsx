import { ComponentProps } from 'react'

import { TableBodyStyled } from './TableBody.styled'

type TableBodyProps = ComponentProps<'tbody'>

export const TableBody = (props: TableBodyProps) => {
  return <TableBodyStyled {...props} />
}
