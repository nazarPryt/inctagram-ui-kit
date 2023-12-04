import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { CustomSelect } from 'shared/ui/Select/Select'

import { FlagEngIcon } from '../../assets/icons/FlagEngIcon'
import { FlagRussiaIcon } from '../../assets/icons/FlagRussiaIcon'

export default {
  component: CustomSelect,
  tags: ['autodocs'],
  title: 'Components/Select',
} as Meta<typeof CustomSelect>

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
        <FlagRussiaIcon />
        Russia
      </>
    ),
    value: 'ru',
  },
  {
    label: (
      <>
        <FlagEngIcon />
        English
      </>
    ),
    value: 'en',
  },
]

type Story = StoryObj<typeof CustomSelect>

const SimpleSelect = () => {
  const [value, setValue] = useState('')

  return <CustomSelect onChange={setValue} options={optionsPrimary} value={value} />
}

export const Simple: Story = {
  render: () => <SimpleSelect />,
}

const SimpleWithLabelSelect = () => {
  const [value, setValue] = useState('')

  return (
    <CustomSelect
      label={'Select'}
      onChange={setValue}
      options={optionsPrimary}
      placeholder={'select...'}
      value={value}
    />
  )
}

export const SimpleWithLabel: Story = {
  render: () => <SimpleWithLabelSelect />,
}

const ErrorSelect = () => {
  const [value, setValue] = useState('')

  return (
    <CustomSelect
      label={'Select'}
      onChange={setValue}
      options={optionsPrimary}
      placeholder={'select...'}
      value={value}
    />
  )
}

export const Error: Story = {
  render: () => <ErrorSelect />,
}

const PaginationSelect = () => {
  const [value, setValue] = useState('')

  return (
    <CustomSelect
      label={'pagination'}
      onChange={setValue}
      options={optionsPagination}
      placeholder={'1'}
      value={value}
    />
  )
}

export const Pagination: Story = {
  render: () => <PaginationSelect />,
}

const FullWidthSelect = () => {
  const [value, setValue] = useState('')

  return <CustomSelect onChange={setValue} options={optionsPrimary} value={value} />
}

export const FullWidth: Story = {
  render: () => <FullWidthSelect />,
}

const CountryExample = () => {
  const [value, setValue] = useState('ru')

  return <CustomSelect onChange={setValue} options={Country} value={value} />
}

export const CountrySelect: Story = {
  render: () => <CountryExample />,
}

const DisabledSelect = () => {
  return <CustomSelect disabled onChange={() => {}} options={optionsPrimary} value={''} />
}

export const Disabled: Story = {
  render: () => <DisabledSelect />,
}
