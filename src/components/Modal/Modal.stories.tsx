import { useState } from 'react'

import { Meta, StoryObj } from '@storybook/react'

import { ModalDecorator } from '../../decorators/ModalDecorator'
import { Modal } from './Modal'

const meta: Meta<typeof Modal> = {
  argTypes: {},
  component: Modal,
  tags: ['docsPage'],

  title: 'Components/Modal',
}

export default meta
type Story = StoryObj<typeof Modal>

export const Default: Story = {
  args: {
    children: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci atque blanditiis
        consequatur corporis culpa, eligendi et excepturi fugit iure laboriosam laborum laudantium
        modi molestias odio quas rem voluptatum. Dolores?
      </p>
    ),
    title: 'Base Modal',
  },
  decorators: [ModalDecorator],
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [open, setOpen] = useState(false)

    function handleModalClosed() {
      setOpen(false)
    }

    function handleModalOpened() {
      setOpen(true)
    }

    return (
      <div>
        <button onClick={handleModalOpened}>Open Modal</button>
        <Modal {...args} handleClose={handleModalClosed} isOpen={open} />
      </div>
    )
  },
}
