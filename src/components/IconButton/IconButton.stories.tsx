import type { Meta, StoryObj } from '@storybook/react'

import { GitHubIcon, GoogleIcon } from '../../icons'
import { IconButton } from './IconButton'

const meta = {
  argTypes: {
    size: {
      description: 'Value for final Button size',
      type: 'number',
    },
  },
  component: IconButton,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  title: 'Components/IconButton',
} satisfies Meta<typeof IconButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: <GitHubIcon />,
  },
}

export const Colorful: Story = {
  args: {
    children: <GoogleIcon />,
    colorful: true,
  },
}
