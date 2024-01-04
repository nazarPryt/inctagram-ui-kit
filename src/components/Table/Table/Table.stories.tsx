import { useState } from '@storybook/preview-api'
import { Meta, StoryObj } from '@storybook/react'

import { BlockedIcon } from '../../../icons'
import { TableBody } from '../TableBody'
import { TableCell } from '../TableCell'
import { TableHead, TableHeadColumnType, TableHeadSortType } from '../TableHead'
import { TableRow } from '../TableRow'
import { Table } from './Table'
import { TableStoryData, TableStoryDataType } from './TableStoryData'

const meta: Meta<typeof Table> = {
  component: Table,
  tags: ['autodocs'],
  title: 'Components/Table',
}

export default meta
export type Story = StoryObj<typeof Table>

export const Simple: Story = {
  render: () => {
    const columns: TableHeadColumnType[] = [
      {
        key: '',
        title: '',
      },
      {
        key: 'id',
        title: 'User ID',
      },
      {
        key: 'username',
        title: 'User name',
      },
      {
        key: 'profile-link',
        title: 'Profile Link',
      },
      {
        key: 'createdBy',
        title: 'Data added',
      },
      {
        key: '',
        title: '',
      },
    ]
    const [sort, setOnSort] = useState<TableHeadSortType>({ direction: 'asc', key: 'id' })
    const [data, setData] = useState<TableStoryDataType[]>(TableStoryData)

    const sortedString = () => {
      if (!sort) {
        return null
      }

      return `${sort.key}-${sort.direction}`
    }

    console.log(sortedString)

    return (
      <Table>
        <TableHead columns={columns} onSort={setOnSort} sort={sort} />

        <TableBody>
          {data.map(user => {
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
