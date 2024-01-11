import { Meta, StoryObj } from '@storybook/react'

import { ReadMore } from './ReadMore'

const meta: Meta<typeof ReadMore> = {
  argTypes: {},
  args: {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut sed eiusmod tempoei usmodr sit amet, consectetur adipiscing elit, sed Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut sed do eiusmod tempoei usmodr sit amet, consectetur adipiscing elit, sed do',
  },
  component: ReadMore,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  title: 'Components/ReadMore',
}

export default meta
type Story = StoryObj<typeof ReadMore>

export const Default: Story = {
  args: { maxLength: 50 },
}
