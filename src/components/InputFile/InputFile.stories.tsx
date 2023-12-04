import type { Meta, StoryObj } from '@storybook/react'

import { withThemeDecorator } from '../../decorators/withThemeDecorator'
import { InputFile } from './InputFile'

const meta = {
  args: {},
  component: InputFile,
  tags: ['autodocs'],
  title: 'Components/InputFile',
} satisfies Meta<typeof InputFile>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'InputFile',
  },
  decorators: [withThemeDecorator],
}
