import { ComponentPropsWithoutRef } from 'react'

import { ArrowDown, ArrowUpIcon } from '../../../icons'
import { TableHeadCell } from '../TableHeadCell'
import { TableRow } from '../TableRow'
import { TableHeadStyled } from './TableHead.styled'

export type TableHeadColumnType = {
  key: string
  sortable: boolean
  title: string
}

export type TableHeadSortType = {
  direction: 'asc' | 'desc'
  key: string
} | null

export type TableHeadType = Omit<
  ComponentPropsWithoutRef<'thead'> & {
    columns: TableHeadColumnType[]
    onSort?: (sort: TableHeadSortType) => void
    sort?: TableHeadSortType
  },
  'children'
>

export const TableHead = ({ columns, onSort, sort, ...restProps }: TableHeadType) => {
  const handleSort = (key: string, sortable: boolean) => () => {
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
          columns.map(({ key, sortable, title }, index) => (
            <TableHeadCell key={index} onClick={handleSort(key, sortable)}>
              {title}
              <span className={'sortIcon'}>
                {sort && sort.key === key && (
                  <span>{sort.direction === 'asc' ? <ArrowUpIcon /> : <ArrowDown />}</span>
                )}
              </span>
            </TableHeadCell>
          ))}
      </TableRow>
    </TableHeadStyled>
  )
}
