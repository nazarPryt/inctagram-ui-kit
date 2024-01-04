import type { Meta, StoryObj } from '@storybook/react'

import { useState } from '@storybook/preview-api'

import { Pagination } from './Pagination'

const meta: Meta<typeof Pagination> = {
  argTypes: { onChange: { action: 'clicked' } },
  args: {
    count: 11,
    page: 1,
  },
  component: Pagination,
  tags: ['autodocs'],
  title: 'Components/Pagination',
}

export default meta

type Story = StoryObj<typeof Pagination>

export const Default: Story = {
  argTypes: { onChange: { action: 'clicked' } },
  render: args => {
    const [page, setPage] = useState(args.page)

    return (
      <>
        <Pagination count={args.count} onChange={setPage} page={page} />
        <br />
        <p>Page: {page}</p>
      </>
    )
  },
}

export const WithPerPageSelect: Story = {
  argTypes: { onChange: { action: 'clicked' } },
  render: args => {
    const [page, setPage] = useState(args.page)
    const [perPage, setPerPage] = useState(8)

    return (
      <>
        <Pagination
          count={args.count}
          onChange={setPage}
          onPerPageChange={setPerPage}
          page={page}
          perPage={perPage}
          perPageOptions={[5, 8, 12, 100]}
        />
        <br />
        <p>Page: {page}</p>
        <p>Per Page: {perPage}</p>
      </>
    )
  },
}
