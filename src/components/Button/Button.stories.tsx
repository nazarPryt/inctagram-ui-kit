import { useState } from '@storybook/preview-api'
import { Meta, StoryObj } from '@storybook/react'

import { BlockedIcon, DotsHorizontal, PersonRemoveIcon } from '../../icons'
import { Popover, PopoverItem } from '../Popover'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
  argTypes: {
    onClick: { action: 'clicked' },
    variant: {
      control: { type: 'radio' }, //here you can specify
      options: ['primary', 'contained', 'outlined', 'text', 'link'],
    },
  },
  component: Button,
  tags: ['docsPage'],
  title: 'Components/Button',
}

export default meta
export type Story = StoryObj<typeof Button>

export const DefaultButton: Story = {
  args: {
    children: 'Default',
    disabled: false,
  },
}
export const Contained: Story = {
  args: {
    children: 'Contained',
    variant: 'contained',
  },
}
export const Outlined: Story = {
  args: {
    children: 'Outlined',
    variant: 'outlined',
  },
}
export const Text: Story = {
  args: {
    children: 'Text',
    variant: 'text',
  },
}
