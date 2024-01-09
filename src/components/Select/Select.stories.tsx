import { toast } from 'react-toastify'

import { useState } from '@storybook/preview-api'
import { Meta, StoryObj } from '@storybook/react'

import { Button } from '../Button'
import { Dialog } from '../Dialog'
import { Modal } from '../Modal'
import { Select } from './Select'
import { options, optionsPagination } from './optionsForSelectStory'

const meta: Meta<typeof Select> = {
  args: { variant: 'primary' },
  component: Select,
  tags: ['autodocs'],
  title: 'Components/Select',
}

export default meta
export type Story = StoryObj<typeof Select>

export const Simple: Story = {
  args: {
    disabled: false,
    options,
    placeholder: 'Select',
  },

  render: (args: any) => {
    const [value, setValue] = useState('')

    return (
      <>
        <Select {...args} onChange={setValue} value={value} />
        <div>Selected value: {value}</div>
      </>
    )
  },
}

export const Pagination: Story = {
  args: {
    disabled: false,
    options: optionsPagination,
    placeholder: '1',
    variant: 'pagination',
    width: 50,
  },

  render: (args: any) => {
    const [value, setValue] = useState(null)

    return (
      <>
        <Select {...args} onChange={setValue} v value={value} />
        <div>Selected value: {value}</div>
      </>
    )
  },
}

export const SimpleWithLabel: Story = {
  args: {
    disabled: false,
    label: 'This is a Label',
    options,
    placeholder: 'placeholder',
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

export const Multiple: Story = {
  args: {
    disabled: false,
    multiple: true,
    options,
    placeholder: 'Select',
  },

  render: (args: any) => {
    const [values, setValues] = useState([])

    return (
      <>
        <Select {...args} multiple onChange={setValues} value={values} />
        <div>Selected values: {values.join(', ')}</div>
      </>
    )
  },
}

export const Error: Story = {
  args: {
    disabled: false,
    errorMessage: 'Here will be error message',
    options,
    placeholder: 'Select',
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

export const Secondary: Story = {
  args: {
    disabled: false,
    options,
    placeholder: 'Select',
    variant: 'secondary',
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

export const SmallWithLongItemNames: Story = {
  args: {
    disabled: false,
    options,
    placeholder: 'Select',
  },

  render: (args: any) => {
    const [value, setValue] = useState(null)

    return (
      <>
        <div style={{ width: 200 }}>
          <Select {...args} onChange={setValue} value={value} />
        </div>
        <div>Selected value: {value}</div>
      </>
    )
  },
}
export const OnModal: Story = {
  args: {
    disabled: false,
    options,
    placeholder: 'Select',
  },

  render: (args: any) => {
    const [value, setValue] = useState(null)
    const [open, setOpen] = useState(false)
    const handleClose = () => {
      setOpen(false)
    }

    return (
      <>
        <Button onClick={() => setOpen(!open)}>Open modal</Button>
        <Modal onClose={handleClose} open={open} title={'Select'}>
          <div>
            <Select {...args} onChange={setValue} portal={false} value={value} />
          </div>
        </Modal>
      </>
    )
  },
}

export const OnDialog: Story = {
  args: {
    disabled: false,
    options,
    placeholder: 'Select placeholder...',
  },
  render: (args: any) => {
    const [value, setValue] = useState(null)
    const [open, setOpen] = useState(false)

    const handleClose = () => {
      setOpen(false)
    }
    const handleSelect = () => {
      if (value) {
        toast(`${value}  was selected`, { type: 'success' })
      } else {
        toast(`you need to select first`, { type: 'error' })
      }
    }

    return (
      <div>
        <Button onClick={() => setOpen(!open)}>Open modal</Button>
        <Dialog
          cancelButtonText={'No'}
          confirmButtonText={'Yes'}
          invertButtons
          onCancelButtonClick={handleClose}
          onClose={handleClose}
          onConfirmButtonClick={handleSelect}
          open={open}
          title={'Ban user'}
        >
          <p>Are you sure to ban this user?</p>
          <Select {...args} onChange={setValue} portal={false} value={value} width={'100%'} />
        </Dialog>
      </div>
    )
  },
}
