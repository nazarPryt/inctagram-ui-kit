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
    value: 'apple',
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
const Country = [
  {
    label: (
      <>
        <ProfileIcon />
        Profile
      </>
    ),
    value: 'ru',
  },
  {
    label: (
      <>
        <BlockedIcon />
        Blocked
      </>
    ),
    value: 'en',
  },
]

type Story = StoryObj<typeof Select>

export const Simple: Story = {
  render: () => {
    const [value, setValue] = useState('')

    return <Select onChange={setValue} options={optionsPrimary} value={value} />
  },
}

export const SimpleWithLabel: Story = {
  render: () => {
    const [value, setValue] = useState('')

    return (
      <Select
        label={'Select'}
        onChange={setValue}
        options={optionsPrimary}
        placeholder={'select...'}
        value={value}
      />
    )
  },
}

export const Error: Story = {
  render: () => {
    const [value, setValue] = useState('')

    return (
      <Select
        label={'Select'}
        onChange={setValue}
        options={optionsPrimary}
        placeholder={'select...'}
        value={value}
      />
    )
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
      />
    )
  },
}

export const FullWidth: Story = {
  render: () => {
    const [value, setValue] = useState('')

    return <Select onChange={setValue} options={optionsPrimary} value={value} />
  },
}

export const WithIcons: Story = {
  render: () => {
    const [value, setValue] = useState('ru')

    return <Select onChange={setValue} options={Country} value={value} />
  },
}

export const Disabled: Story = {
  render: () => {
    return <Select disabled onChange={() => {}} options={optionsPrimary} value={''} />
  },
}
