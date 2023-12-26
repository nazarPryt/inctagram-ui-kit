import type { Meta, StoryObj } from '@storybook/react'

import { Pagination } from './Pagination'

const meta: Meta<typeof Pagination> = {
  args: {},
  component: Pagination,
  tags: ['autodocs'],
  title: 'Components/Pagination',
}

export default meta
type Story = StoryObj<typeof Pagination>

export const Default: Story = {
  args: { count: 20, page: 1 },
}
