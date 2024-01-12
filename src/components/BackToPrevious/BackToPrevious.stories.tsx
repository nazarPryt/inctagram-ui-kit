import type { Meta, StoryObj } from '@storybook/react'

import { BackToPrevious } from './BackToPrevious'

const meta = {
  component: BackToPrevious,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  title: 'Components/BackToPrevious',
} satisfies Meta<typeof BackToPrevious>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    href: '/',
    title: 'Back to Users List',
  },
}
