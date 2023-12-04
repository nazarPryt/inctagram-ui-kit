import type {Meta, StoryObj} from '@storybook/react'
import {Typography} from './Typography'

const meta = {
    title: 'Components/Typography',
    component: Typography,
    tags: ['autodocs'],
    argTypes: {
        variant: {
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
            control: {type: 'radio'},
        },
    },
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

const children =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae consectetur ducimus eos fugiat minus qui!'

export const Large: Story = {
    args: {
        variant: 'large',
        children,
    },
}

export const H1: Story = {
    args: {
        variant: 'h1',
        children,
        disabled: false,
        as: 'h1',
    },
}

export const H2: Story = {
    args: {
        variant: 'h2',
        children,
        as: 'h2',
    },
}
export const H3: Story = {
    args: {
        variant: 'h3',
        children,
        as: 'h3',
    },
}
export const RegularText16: Story = {
    args: {
        variant: 'regular_text_16',
        children,
    },
}

export const BoldText16: Story = {
    args: {
        variant: 'Bold_text_16',
        children,
    },
}
export const RegularText14: Story = {
    args: {
        variant: 'regular_text_14',
        children,
    },
}
export const MediumText14: Story = {
    args: {
        variant: 'Medium_text_14',
        children,
    },
}

export const BoldText14: Story = {
    args: {
        variant: 'bold_text_14',
        children,
        as: 'h1',
    },
}
export const SmallText: Story = {
    args: {
        variant: 'small_text',
        children,
    },
}
export const SemiBoldSmallText: Story = {
    args: {
        variant: 'semi_bold_small_text',
        children,
    },
}
export const RegularLink: Story = {
    args: {
        variant: 'regular_link',
        children,
    },
}

export const SmallLink: Story = {
    args: {
        variant: 'small_link',
        children,
    },
}

export const Error: Story = {
    args: {
        variant: 'error',
        children,
    },
}
