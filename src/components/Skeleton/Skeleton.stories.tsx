import { Meta, type StoryObj } from '@storybook/react'

import { Skeleton } from './Skeleton'

const meta: Meta<typeof Skeleton> = {
  component: Skeleton,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  title: 'Components/Skeleton',
}

export default meta
type Story = StoryObj<typeof meta>

export const Horizontal: Story = { args: { count: 1, height: 60, width: '100%' } }

export const Circle: Story = { args: { circle: true, count: 1, height: 60, width: 60 } }
