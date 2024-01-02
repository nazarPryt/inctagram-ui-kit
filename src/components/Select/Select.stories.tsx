import type { Meta, StoryObj } from '@storybook/react'

import { useState } from '@storybook/preview-api'

import { BlockedIcon, ProfileIcon } from '../../icons'
import { Select } from './Select'

const meta: Meta<typeof Select> = {
  component: Select,
  tags: ['autodocs'],
  title: 'Components/Select',
}

export default meta

const optionsPrimary = [
  {
    label: 'Apple',
    value: 1,
  },
  {
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
]
const optionsPagination = [
  {
    label: '1',
    value: '1',
  },
  {
    label: '2',
    value: '2',
  },
  {
    label: '3',
    value: '3',
  },
  {
    label: '4',
    value: '4',
  },
]
const WithIconOptions = [
  {
    label: (
      <>
        <BlockedIcon />
        Blocked
      </>
    ),
    value: 'blocked',
  },
  {
    label: (
      <>
        <ProfileIcon />
        Active
      </>
    ),
    value: 'active',
  },
]

type Story = StoryObj<typeof Select>

export const Simple: Story = {
  args: {
    disabled: false,
    options: optionsPrimary,
    placeholder: 'Select',
  },
  render: args => {
    const [value, setValue] = useState('')

    return (
      <>
        <Select {...args} onChange={setValue} value={value} />
        <br />
        <p>Selected value: {value}</p>
      </>
    )
  },
}

export const SimpleWithLabel: Story = {
  args: {
    disabled: false,
    label: 'This is a label',
    options: optionsPrimary,
    placeholder: 'Fruits',
  },
  render: args => {
    const [value, setValue] = useState('')

    return (
      <>
        <Select {...args} onChange={setValue} value={value} />
        <br />
        <p>Selected value: {value}</p>
      </>
    )
  },
}

export const Error: Story = {
  args: {
    disabled: false,
    errorMessage: 'Error message here...',
    options: optionsPrimary,
    placeholder: 'Все курсы',
  },
  render: args => {
    const [value, setValue] = useState('')

    return <Select {...args} onChange={setValue} value={value} />
  },
}

export const Pagination: Story = {
  render: () => {
    const [value, setValue] = useState('')

    return (
      <Select
        label={'pagination'}
        onChange={setValue}
        options={optionsPagination}
        placeholder={'1'}
        value={value}
        variant={'pagination'}
      />
    )
  },
}

export const WithIcons: Story = {
  render: () => {
    const [value, setValue] = useState('Not selected')

    return (
      <>
        <Select onChange={setValue} options={WithIconOptions} placeholder={value} value={value} />
        <br />
        <p>Selected value: {value}</p>
      </>
    )
  },
}

export const Disabled: Story = {
  render: () => {
    return <Select disabled onChange={() => {}} options={optionsPrimary} value={''} />
  },
}
