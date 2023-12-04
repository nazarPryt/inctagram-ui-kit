import type { Meta, StoryObj } from '@storybook/react'

import { withThemeDecorator } from '../../decorators/withThemeDecorator'
import { Loader } from './Loader'

const meta = {
  args: {},
  component: Loader,
  title: 'Components/Loader',
} satisfies Meta<typeof Loader>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
  decorators: [withThemeDecorator],
}
