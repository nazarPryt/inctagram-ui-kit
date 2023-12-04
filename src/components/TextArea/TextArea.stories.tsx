import type { Meta, StoryObj } from '@storybook/react'

import { withThemeDecorator } from '../../lib/storybook/decorators/withThemeDecorator'
import { TextArea } from './TextArea'

const meta = {
  args: {},
  component: TextArea,
  tags: ['autodocs'],
  title: 'Components/TextArea',
} satisfies Meta<typeof TextArea>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Label',
  },
  decorators: [withThemeDecorator],
}

export const Error: Story = {
  args: {
    error: 'Error message',

    label: 'Input with error',
  },
  decorators: [withThemeDecorator],
}
