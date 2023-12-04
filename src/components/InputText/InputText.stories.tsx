import type { Meta, StoryObj } from '@storybook/react'

import { withThemeDecorator } from '../../decorators/withThemeDecorator'
import { InputText } from './InputText'

const meta = {
  args: {},
  component: InputText,
  tags: ['autodocs'],
  title: 'Components/InputText',
} satisfies Meta<typeof InputText>

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
