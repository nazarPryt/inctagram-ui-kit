import type {Meta, StoryObj} from '@storybook/react'
import {withThemeDecorator} from '../../lib/storybook/decorators/withThemeDecorator'
import {TextArea} from './TextArea'

const meta = {
    title: 'Components/TextArea',
    component: TextArea,
    tags: ['autodocs'],
    args: {},
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
        label: 'Input with error',

        error: 'Error message',
    },
    decorators: [withThemeDecorator],
}
