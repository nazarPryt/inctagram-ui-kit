import { Meta, StoryObj } from '@storybook/react'

import { AvatarIcon } from './AvatarIcon'

const meta: Meta<typeof AvatarIcon> = {
  argTypes: {},
  component: AvatarIcon,
  tags: ['autodocs'],
  title: 'Components/AvatarIcon',
}

export default meta
type Story = StoryObj<typeof AvatarIcon>

export const Default: Story = {
  args: {
    href: '/',
    img: 'https://loremflickr.com/50/50',
  },
}
