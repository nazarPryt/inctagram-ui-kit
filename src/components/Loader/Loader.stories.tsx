import type { Meta, StoryObj } from '@storybook/react'

import { Loader } from './Loader'

const meta = {
  args: {},
  component: Loader,
  tags: ['autodocs'],
  title: 'Components/Loader',
} satisfies Meta<typeof Loader>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const Size: Story = {
  args: { size: 300 },
}

export const FullScreen: Story = {
  args: { fullScreen: true },
  render: args => {
    return (
      <div>
        <Loader {...args} />
        <h1>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium aut consequuntur
          dicta doloribus dolorum et eum expedita harum hic, inventore libero neque nesciunt non
          quae quasi quos sit voluptatum! Aliquam culpa delectus dolores est illo impedit nam sint
          velit!
        </h1>
        <div style={{ backgroundColor: 'violet', height: '400px' }} />
        <div style={{ backgroundColor: 'red', height: '400px' }} />
      </div>
    )
  },
}
