import type { Meta, StoryObj } from '@storybook/react'

import { ChangeEvent } from 'react'

import { useState } from '@storybook/preview-api'

import { TextArea } from './TextArea'

const meta = {
  args: {},
  component: TextArea,
  tags: ['autodocs'],
  title: 'Components/TextArea',
} satisfies Meta<typeof TextArea>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Label',
  },
}

export const Error: Story = {
  args: {
    error: 'Error message',
    label: 'Input with error',
  },
}
export const WithMaxLengthError: Story = {
  args: {
    label: 'With Max Length Error',
    maxLength: 10,
  },
  render: args => {
    const errorMessage = `Allowed text not more then ${args.maxLength} characters`

    const [text, setText] = useState('some long text')
    const [error, setError] = useState(errorMessage)

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
      const value = e.currentTarget.value

      setText(value)
      if (args.maxLength && args.maxLength < text.length) {
        setError(errorMessage)
      }
      if (args.maxLength && args.maxLength > text.length) {
        setError(``)
      }
    }

    return <TextArea error={error} onChange={handleChange} value={text} {...args} />
  },
}
