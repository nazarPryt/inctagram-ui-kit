import type { Meta, StoryObj } from '@storybook/react'

import { useState } from '@storybook/preview-api'

import { Pagination } from './Pagination'

const meta: Meta<typeof Pagination> = {
  // argTypes: { onChange: { action: 'clicked' } },
  args: { count: 12, page: 1 },
  component: Pagination,
  tags: ['autodocs'],
  title: 'Components/Pagination',
}

export default meta

type Story = StoryObj<typeof Pagination>

export const Default: Story = {
  // argTypes: { onChange: { action: 'clicked' } },
  render: () => {
    const [page, setPage] = useState(1)
    const [perPage, setPerPage] = useState(8)
    const TOTAL_PAGES_COUNT = 10

    return (
      <Pagination
        count={TOTAL_PAGES_COUNT}
        onChange={setPage}
        onPerPageChange={setPerPage}
        page={page}
        perPage={perPage}
        perPageOptions={[5, 8, 12, 100]}
      />
    )
  },
}
