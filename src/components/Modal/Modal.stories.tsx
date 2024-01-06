import { useState } from '@storybook/preview-api'
import { Meta, StoryObj } from '@storybook/react'

import { Button } from '../Button'
import { Modal } from './Modal'

const meta: Meta<typeof Modal> = {
  component: Modal,
  tags: ['autodocs'],
  title: 'Components/Modal',
}

export default meta
export type Story = StoryObj<typeof Modal>

export const Simple: Story = {
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
