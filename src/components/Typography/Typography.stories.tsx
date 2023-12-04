import type { Meta, StoryObj } from '@storybook/react'

import { Typography } from './Typography'

const meta = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: [
        'large',
        'regular_text_16',
        'Bold_text_16',
        'regular_text_14',
        'Medium_text_14',
        'bold_text_14',
        'small_text',
        'semi_bold_small_text',
        'regular_link',
        'small_link',
        'error',
      ],
    },
  },
  component: Typography,
  tags: ['autodocs'],
  title: 'Components/Typography',
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

const children =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae consectetur ducimus eos fugiat minus qui!'

export const Large: Story = {
  args: {
    children,
    variant: 'large',
  },
}

export const H1: Story = {
  args: {
    as: 'h1',
    children,
    disabled: false,
    variant: 'h1',
  },
}

export const H2: Story = {
  args: {
    as: 'h2',
    children,
    variant: 'h2',
  },
}
export const H3: Story = {
  args: {
    as: 'h3',
    children,
    variant: 'h3',
  },
}
export const RegularText16: Story = {
  args: {
    children,
    variant: 'regular_text_16',
  },
}

export const BoldText16: Story = {
  args: {
    children,
    variant: 'Bold_text_16',
  },
}
export const RegularText14: Story = {
  args: {
    children,
    variant: 'regular_text_14',
  },
}
export const MediumText14: Story = {
  args: {
    children,
    variant: 'Medium_text_14',
  },
}

export const BoldText14: Story = {
  args: {
    as: 'h1',
    children,
    variant: 'bold_text_14',
  },
}
export const SmallText: Story = {
  args: {
    children,
    variant: 'small_text',
  },
}
export const SemiBoldSmallText: Story = {
  args: {
    children,
    variant: 'semi_bold_small_text',
  },
}
export const RegularLink: Story = {
  args: {
    children,
    variant: 'regular_link',
  },
}

export const SmallLink: Story = {
  args: {
    children,
    variant: 'small_link',
  },
}

export const Error: Story = {
  args: {
    children,
    variant: 'error',
  },
}
