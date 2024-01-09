import { toast } from 'react-toastify'

import { Meta, StoryObj } from '@storybook/react'

import { Button } from '../Button'

const meta: Meta<typeof toast> = {
  component: toast,
  tags: ['autodocs'],
  title: 'Components/Toast',
}

export default meta
export type Story = StoryObj<typeof toast>

export const Simple: Story = {
  args: {},
  render: () => {
    const handleShow = () => {
      toast('Wow so easy!', { type: 'success' })
    }

    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button onClick={handleShow}>Show</Button>
      </div>
    )
  },
}
