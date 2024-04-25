import { Meta, StoryObj } from '@storybook/react'

import { Button } from '../Button/Button'
import { ContextMenuExampleStory } from './ContextMenuExampleStory'

const meta: Meta<typeof ContextMenuExampleStory> = {
  component: ContextMenuExampleStory,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  title: 'Components/ContextMenu',
}

export default meta
export type Story = StoryObj<typeof ContextMenuExampleStory>

//https://www.radix-ui.com/primitives/docs/components/context-menu
export const Example: Story = {
  render: () => {
    return <ContextMenuExampleStory />
  },
}
export const OnButton: Story = {
  render: () => {
    return (
      <div>
        <Button>open</Button>
      </div>
    )
  },
}
