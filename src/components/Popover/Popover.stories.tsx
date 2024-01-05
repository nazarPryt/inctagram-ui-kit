import { useState } from '@storybook/preview-api'
import { Meta, StoryObj } from '@storybook/react'

import { DotsHorizontal } from '../../icons'
import { Button } from '../Button'
import { Popover } from './Popover'

const meta: Meta<typeof Popover> = {
  argTypes: {
    onClick: { action: 'clicked' },
  },
  component: Popover,
  tags: ['autodocs'],
  title: 'Components/Popover',
}

export default meta
export type Story = StoryObj<typeof Popover>

export const Simple: Story = {
  render: () => {
    const [popover, setPopover] = useState(false)

    const handleButtonOne = () => {
      console.log('button 1')
      setPopover(false)
    }
    const handleButtonTwo = () => {
      console.log('button 2')
      setPopover(false)
    }

    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Popover icon={<DotsHorizontal />} isPopoverOpen={popover} setIsPopoverOpen={setPopover}>
          <Button onClick={handleButtonOne}>Button 1</Button>
          <Button onClick={handleButtonTwo}>Button 2</Button>
        </Popover>
      </div>
    )
  },
}
