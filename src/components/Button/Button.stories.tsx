import { Meta, StoryObj } from '@storybook/react'

import { Button } from './Button'

const meta: Meta<typeof Button> = {
  argTypes: {
    onClick: { action: 'clicked' },
    variant: {
      control: { type: 'radio' },
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
