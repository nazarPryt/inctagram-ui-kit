import { useState } from '@storybook/preview-api'
import { Meta, StoryObj } from '@storybook/react'

import { BlockedIcon } from '../../icons'
import { Table } from './Table'
import { TableBody } from './TableBody'
import { TableCell } from './TableCell'
import { TableHead, TableHeadSortType } from './TableHead'
import { TableHeadCell } from './TableHeadCell'
import { TableRow } from './TableRow'
import { TableStoryColumns, TableStoryData } from './TableStoryData'

const meta: Meta<typeof Table> = {
  component: Table,
  tags: ['autodocs'],
  title: 'Components/Table',
}

export default meta
export type Story = StoryObj<typeof Table>

export const Simple: Story = {
  render: () => {
    return (
      <Table>
        <TableHead columns={TableStoryColumns} />

        <TableBody>
          {TableStoryData.map(user => {
            return (
              <TableRow key={user.id}>
                <TableCell>{user.userBan && <BlockedIcon />}</TableCell>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.userName}</TableCell>
                <TableCell>ва</TableCell>
                <TableCell>{new Date(user.createdAt).toLocaleDateString('ru-RU')}</TableCell>
                <TableCell>...</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    )
  },
}
export const WithOutColumnsProps: Story = {
  render: () => {
    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableHeadCell>dfdf</TableHeadCell>
            <TableHeadCell>dfdf</TableHeadCell>
            <TableHeadCell>dfdf</TableHeadCell>
            <TableHeadCell>dfdf</TableHeadCell>
            <TableHeadCell>dfdf</TableHeadCell>
            <TableHeadCell>dfdf</TableHeadCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {TableStoryData.map(user => {
            return (
              <TableRow key={user.id}>
                <TableCell>{user.userBan && <BlockedIcon />}</TableCell>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.userName}</TableCell>
                <TableCell>ва</TableCell>
                <TableCell>{new Date(user.createdAt).toLocaleDateString('ru-RU')}</TableCell>
                <TableCell>...</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    )
  },
}

export const SortableHeader: Story = {
  render: () => {
    const [sort, setOnSort] = useState<TableHeadSortType>({ direction: 'asc', key: 'id' })

    const sortedString = () => {
      if (!sort) {
        return null
      }

      return `${sort.key}-${sort.direction}`
    }

    console.log(sortedString())

    return (
      <Table>
        <TableHead columns={TableStoryColumns} onSort={setOnSort} sort={sort} />

        <TableBody>
          {TableStoryData.map(user => {
            return (
              <TableRow key={user.id}>
                <TableCell>{user.userBan && <BlockedIcon />}</TableCell>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.userName}</TableCell>
                <TableCell>ва</TableCell>
                <TableCell>{new Date(user.createdAt).toLocaleDateString('ru-RU')}</TableCell>
                <TableCell>...</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    )
  },
}
