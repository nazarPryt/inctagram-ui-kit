import { Meta, StoryObj } from '@storybook/react'

import { TableSkeleton } from './TableSkeleton'

const meta: Meta<typeof TableSkeleton> = {
  component: TableSkeleton,
  tags: ['autodocs'],
  title: 'Components/TableSkeleton',
}

export default meta
export type Story = StoryObj<typeof TableSkeleton>

export const Simple: Story = {
  args: {
    columns: 4,
    rows: 5,
  },
}
