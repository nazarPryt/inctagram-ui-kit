import type { Meta, StoryObj } from '@storybook/react'

import { useState } from '@storybook/preview-api'

import { Select } from './Select'

const meta: Meta<typeof Select> = {
  component: Select,
  tags: ['autodocs'],
  title: 'Components/Select',
}

export default meta

type Story = StoryObj<typeof Select>

const options = [
  {
    label: 'Apple',
    value: 'apple',
  },
  {
    label: 'Стажировка для QA manual',
    value: 'qa-internship',
  },
  {
    disabled: true,
    label: 'Banana',
    value: 'banana',
  },
  {
    label: 'Blueberry',
    value: 'blueberry',
  },
  {
    label: 'Grapes',
    value: 'grapes',
  },
  {
    label: 'Pineapple',
    value: 'pineapple',
  },
  {
    label: 'Cherry',
    value: 'cherry',
  },
  {
    label: 'Grapefruit',
    value: 'grapefruit',
  },
  {
    label: 'Lemon',
    value: 'lemon',
  },
  {
    label: 'Mango',
    value: 'mango',
  },
  {
    label: 'Grapes',
    value: 'grapes',
  },
  {
    label: 'Pineapple',
    value: 'pineapple',
  },
  {
    label: 'Apple',
    value: 'apple1',
  },
  {
    label: 'Banana',
    value: 'banana1',
  },
]

export const Simple: Story = {
  args: {
    disabled: false,
    options,
    placeholder: 'Все курсы',
  },

  render: (args: any) => {
    const [value, setValue] = useState(null)

    return (
      <>
        <Select {...args} onChange={setValue} value={value} />
        <div>Selected value: {value}</div>
      </>
    )
  },
}
