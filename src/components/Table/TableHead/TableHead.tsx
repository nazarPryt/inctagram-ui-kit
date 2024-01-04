import { ComponentPropsWithoutRef } from 'react'

import { TableHeadCell } from '../TableHeadCell'
import { TableRow } from '../TableRow'
import { TableHeadStyled } from './TableHead.styled'

export type TableHeadColumnType = {
  key: string
  title: string
}

export type TableHeadSortType = {
  direction: 'asc' | 'desc'
  key: string
} | null

type TableHeadPropsType = Omit<
  ComponentPropsWithoutRef<'thead'> & {
    columns?: TableHeadColumnType[]
    onSort?: (sort: TableHeadSortType) => void
    sort?: TableHeadSortType
  },
  'children'
>

export const TableHead = ({ columns, onSort, sort, ...restProps }: TableHeadPropsType) => {
  const handleSort = (key: string, sortable?: boolean) => () => {
    if (!onSort || !sortable) {
      return
    }

    if (sort?.key !== key) {
      return onSort({ direction: 'asc', key })
    }

    if (sort.direction === 'desc') {
      return onSort(null)
    }

    return onSort({
      direction: sort?.direction === 'asc' ? 'desc' : 'asc',
      key,
    })
  }

  return (
    <TableHeadStyled {...restProps}>
      <TableRow>
        {columns &&
          columns.map(({ key, sortable, title }) => (
            <TableHeadCell key={key} onClick={handleSort(key, sortable)}>
              {title}
              {sort && sort.key === key && <span>{sort.direction === 'asc' ? '▲' : '▼'}</span>}
            </TableHeadCell>
          ))}
      </TableRow>
    </TableHeadStyled>
  )
}
