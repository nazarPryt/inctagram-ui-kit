import type {Meta, StoryObj} from '@storybook/react'
import {withThemeDecorator} from '../../lib/storybook/decorators/withThemeDecorator'
import {InputText} from './InputText'

const meta = {
    title: 'Components/InputText',
    component: InputText,
    tags: ['autodocs'],
    args: {},
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
        label: 'Input with error',

        error: 'Error message',
    },
    decorators: [withThemeDecorator],
}
