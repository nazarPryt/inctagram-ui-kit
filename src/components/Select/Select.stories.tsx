import type {Meta, StoryObj} from '@storybook/react'
import React, {useState} from 'react'
import {FlagEngIcon} from '../../assets/icons/FlagEngIcon'
import {FlagRussiaIcon} from '../../assets/icons/FlagRussiaIcon'
import {CustomSelect} from 'shared/ui/Select/Select'

export default {
    title: 'Components/Select',
    component: CustomSelect,
    tags: ['autodocs'],
} as Meta<typeof CustomSelect>

const optionsPrimary = [
    {
        value: 'apple',
        label: 'Apple',
    },
    {
        value: 'banana',
        label: 'Banana',
    },
    {
        value: 'blueberry',
        label: 'Blueberry',
    },
    {
        value: 'grapes',
        label: 'Grapes',
    },
]
const optionsPagination = [
    {
        value: '1',
        label: '1',
    },
    {
        value: '2',
        label: '2',
    },
    {
        value: '3',
        label: '3',
    },
    {
        value: '4',
        label: '4',
    },
]
const Country = [
    {
        value: 'ru',
        label: (
            <>
                <FlagRussiaIcon />
                Russia
            </>
        ),
    },
    {
        value: 'en',
        label: (
            <>
                <FlagEngIcon />
                English
            </>
        ),
    },
]

type Story = StoryObj<typeof CustomSelect>

const SimpleSelect = () => {
    const [value, setValue] = useState('')

    return <CustomSelect value={value} onChange={setValue} options={optionsPrimary} />
}
export const Simple: Story = {
    render: () => <SimpleSelect />,
}

const SimpleWithLabelSelect = () => {
    const [value, setValue] = useState('')

    return (
        <CustomSelect
            value={value}
            onChange={setValue}
            placeholder={'select...'}
            options={optionsPrimary}
            label={'Select'}
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
            value={value}
            onChange={setValue}
            options={optionsPrimary}
            placeholder={'select...'}
            label={'Select'}
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
            value={value}
            onChange={setValue}
            options={optionsPagination}
            label={'pagination'}
            placeholder={'1'}
        />
    )
}

export const Pagination: Story = {
    render: () => <PaginationSelect />,
}

const FullWidthSelect = () => {
    const [value, setValue] = useState('')

    return <CustomSelect value={value} onChange={setValue} options={optionsPrimary} />
}

export const FullWidth: Story = {
    render: () => <FullWidthSelect />,
}

const CountryExample = () => {
    const [value, setValue] = useState('ru')

    return <CustomSelect value={value} onChange={setValue} options={Country} />
}

export const CountrySelect: Story = {
    render: () => <CountryExample />,
}

const DisabledSelect = () => {
    return <CustomSelect value={''} onChange={() => {}} options={optionsPrimary} disabled />
}

export const Disabled: Story = {
    render: () => <DisabledSelect />,
}
