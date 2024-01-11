import type { Meta, StoryObj } from '@storybook/react'

import { Loader } from './Loader'

const meta = {
  args: {},
  component: Loader,
  tags: ['autodocs'],
  title: 'Components/Loader',
} satisfies Meta<typeof Loader>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const Size: Story = {
  args: { size: 300 },
}

export const FullScreen: Story = {
  args: { fullScreen: true },
}
