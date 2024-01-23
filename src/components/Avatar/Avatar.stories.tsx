import { Meta, StoryObj } from '@storybook/react'

import { Avatar } from './Avatar'

const meta: Meta<typeof Avatar> = {
  argTypes: {},
  component: Avatar,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  title: 'Components/Avatar',
}

export default meta
type Story = StoryObj<typeof Avatar>

export const WithSrc: Story = {
  args: {
    src: 'https://loremflickr.com/50/50',
    userName: 'naza pryt',
  },
}

export const WithOutSrc: Story = {
  args: {
    userName: 'naza pryt',
  },
}
export const ChangedSize: Story = {
  args: {
    size: 80,
    userName: 'naza pryt',
  },
}
export const OneLetterName: Story = {
  args: {
    size: 80,
    userName: 'nazar',
  },
}
