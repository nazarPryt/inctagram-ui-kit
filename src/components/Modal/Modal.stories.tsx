import { useState } from '@storybook/preview-api'
import { Meta, StoryObj } from '@storybook/react'

import { Button } from '../Button'
import { Scrollbar } from '../Scrollbar'
import { Modal } from './Modal'

const meta: Meta<typeof Modal> = {
  args: {
    children: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci atque blanditiis
        consequatur corporis culpa, eligendi et excepturi fugit iure laboriosam laborum laudantium
        modi molestias odio quas rem voluptatum. Dolores?
      </p>
    ),
    title: 'modal title',
  },
  component: Modal,
  tags: ['autodocs'],
  title: 'Components/Modal',
}

export default meta
export type Story = StoryObj<typeof Modal>

export const Simple: Story = {
  render: args => {
    const [modal, setModal] = useState(false)

    function handleModalClosed() {
      setModal(false)
    }
    function handleModalOpened() {
      setModal(true)
    }

    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button onClick={handleModalOpened}>Open Modal window</Button>
        <Modal {...args} onClose={handleModalClosed} open={modal} />
      </div>
    )
  },
}

export const WithoutCloseButton: Story = {
  args: {
    showCloseButton: false,
  },

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
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button onClick={handleModalOpened}>Open dialog</Button>
        </div>

        <Modal {...args} onClose={handleModalClosed} open={open} />
      </>
    )
  },
}

export const WithOutHeader: Story = {
  args: {
    open: false,
    showTitle: false,
    size: 'lg',
  },
  render: args => {
    const [modal, setModal] = useState(false)

    function handleModalClosed() {
      setModal(false)
    }
    function handleModalOpened() {
      setModal(true)
    }

    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button onClick={handleModalOpened}>Open Modal window</Button>
        <Modal {...args} onClose={handleModalClosed} open={modal} />
      </div>
    )
  },
}

export const WithContentOverflow: Story = {
  args: {
    children: (
      <Scrollbar maxHeight={'40vh'}>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet blanditiis corporis
            dolore ducimus, eveniet exercitationem facere impedit magnam, praesentium, quae quo sit.
            Alias dolores porro quibusdam, sapiente veritatis voluptatibus. Aliquid.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet blanditiis corporis
            dolore ducimus, eveniet exercitationem facere impedit magnam, praesentium, quae quo sit.
            Alias dolores porro quibusdam, sapiente veritatis voluptatibus. Aliquid.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet blanditiis corporis
            dolore ducimus, eveniet exercitationem facere impedit magnam, praesentium, quae quo sit.
            Alias dolores porro quibusdam, sapiente veritatis voluptatibus. Aliquid.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet blanditiis corporis
            dolore ducimus, eveniet exercitationem facere impedit magnam, praesentium, quae quo sit.
            Alias dolores porro quibusdam, sapiente veritatis voluptatibus. Aliquid.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet blanditiis corporis
            dolore ducimus, eveniet exercitationem facere impedit magnam, praesentium, quae quo sit.
            Alias dolores porro quibusdam, sapiente veritatis voluptatibus. Aliquid.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet blanditiis corporis
            dolore ducimus, eveniet exercitationem facere impedit magnam, praesentium, quae quo sit.
            Alias dolores porro quibusdam, sapiente veritatis voluptatibus. Aliquid.
          </p>
        </div>
      </Scrollbar>
    ),
    title: 'modal with overflow',
  },
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
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button onClick={handleModalOpened}>Open dialog</Button>
        </div>

        <Modal {...args} onClose={handleModalClosed} open={open} />
      </>
    )
  },
}
