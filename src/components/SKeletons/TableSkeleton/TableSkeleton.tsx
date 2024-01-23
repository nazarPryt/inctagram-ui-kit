import { Skeleton } from '../../Skeleton'
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from '../../Table'
import { TableSkeletonStyled } from './TableSkeleton.styled'

export type TableSkeletonProps = {
  columns: number
  rows: number
}
export const TableSkeleton = ({ columns, rows }: TableSkeletonProps) => {
  const renderHeadColumns = () =>
    Array(columns)
      .fill({})
      .map((_, index) => {
        return (
          <TableHeadCell key={index}>
            <Skeleton height={20} width={150} />
          </TableHeadCell>
        )
      })

  const renderBodyRows = () =>
    Array(rows)
      .fill({})
      .map((_, index) => {
        return <TableRow key={index}>{renderBodyColumns()}</TableRow>
      })
  const renderBodyColumns = () =>
    Array(columns)
      .fill({})
      .map((_, index) => {
        return (
          <TableCell key={index}>
            <Skeleton height={20} width={120} />
          </TableCell>
        )
      })

  return (
    <TableSkeletonStyled>
      <Table>
        <TableHead>
          <TableRow>{renderHeadColumns()}</TableRow>
        </TableHead>
        <TableBody>{renderBodyRows()}</TableBody>
      </Table>
    </TableSkeletonStyled>
  )
}
