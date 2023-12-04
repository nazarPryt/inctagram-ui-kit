import { Decorator } from '@storybook/react'

export const ModalDecorator: Decorator = Story => {
  return (
    <div>
      <div id={'react-portal-modal-container'}></div>
      <Story />
    </div>
  )
}
