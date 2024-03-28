import type { Meta, StoryObj } from '@storybook/react'

import { useState } from '@storybook/preview-api'

import { InputText } from './InputText'

const meta = {
  argTypes: {
    onChange: { action: 'change' },
  },
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
}
export const Search: Story = {
  args: {
    placeholder: 'Search...',
    search: true,
  },
  render: args => {
    const [text, setText] = useState('')

    return (
      <InputText
        onChange={e => setText(e.currentTarget.value)}
        onClearClick={() => setText('')}
        {...args}
        value={text}
      />
    )
  },
}

export const EmailInput: Story = {
  args: {
    // error: 'Error message',
    label: 'Email Input',
    type: 'email',
  },
}

export const Error: Story = {
  args: {
    error: 'Error message',
    label: 'Input with error',
  },
}
