import type { Meta, StoryObj } from '@storybook/react'

import { ProfileIcon } from '../../icons'
import { NavLink } from './NavLink'

const meta = {
  args: {},
  component: NavLink,
  tags: ['autodocs'],
  title: 'Components/NavLink',
} satisfies Meta<typeof NavLink>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    href: '/',
    icon: <ProfileIcon />,
    name: 'NavLink',
    pathname: '/sd',
  },
}

export const Active: Story = {
  args: {
    href: '/',
    icon: <ProfileIcon />,
    name: 'NavLink',
    pathname: '/',
  },
}
