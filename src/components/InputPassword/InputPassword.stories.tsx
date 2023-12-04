import type { Meta, StoryObj } from '@storybook/react'

import { withThemeDecorator } from '../../decorators/withThemeDecorator'
import { InputPassword } from './InputPassword'

const meta = {
  args: {},
  component: InputPassword,
  tags: ['autodocs'],
  title: 'Components/InputPassword',
} satisfies Meta<typeof InputPassword>

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
