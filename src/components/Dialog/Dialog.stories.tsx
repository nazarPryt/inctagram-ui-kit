import { useState } from '@storybook/preview-api'
import { Meta, StoryObj } from '@storybook/react'

import { Button } from '../Button'
import { Dialog } from './Dialog'

const meta: Meta<typeof Dialog> = {
  args: {
    cancelButtonText: 'Nope',
    children: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci atque blanditiis
        consequatur corporis culpa, eligendi et excepturi fugit iure laboriosam laborum laudantium
        modi molestias odio quas rem voluptatum. Dolores?
      </p>
    ),
    confirmButtonText: 'Yes',
    open: true,
    title: 'Some question here',
  },
  component: Dialog,
  tags: ['autodocs'],
  title: 'Components/Dialog',
}

export default meta
export type Story = StoryObj<typeof Dialog>

export const Simple = {
  render: (args: any) => {
    const [open, setOpen] = useState(false)

    function handleModalClosed() {
      setOpen(false)
    }
    function handleModalOpened() {
      setOpen(true)
    }

    return (
      <>
        <span>
          <Button onClick={handleModalOpened}>Open dialog</Button>
        </span>

        <Dialog {...args} invertButtons={false} onClose={handleModalClosed} open={open} />
      </>
    )
  },
}
