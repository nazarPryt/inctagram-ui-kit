import {Meta, StoryObj} from '@storybook/react'
import {Modal} from './Modal'
import React, {useState} from 'react'
import {ModalDecorator} from '../../lib/storybook/decorators/ModalDecorator'

const meta: Meta<typeof Modal> = {
    title: 'Components/Modal',
    component: Modal,
    tags: ['docsPage'],
    argTypes: {},
}

export default meta
type Story = StoryObj<typeof Modal>

export const Default: Story = {
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
                <Modal {...args} isOpen={open} handleClose={handleModalClosed} />
            </div>
        )
    },
    args: {
        title: 'Base Modal',
        children: (
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci atque blanditiis consequatur
                corporis culpa, eligendi et excepturi fugit iure laboriosam laborum laudantium modi molestias odio quas
                rem voluptatum. Dolores?
            </p>
        ),
    },
    decorators: [ModalDecorator],
}
