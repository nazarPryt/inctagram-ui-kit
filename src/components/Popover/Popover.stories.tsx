import { useState } from '@storybook/preview-api'
import { Meta, StoryObj } from '@storybook/react'

import { BlockedIcon, DotsHorizontal, PersonRemoveIcon } from '../../icons'
import { Popover } from './Popover'
import { PopoverItem } from './PopoverItem'

const meta: Meta<typeof Popover> = {
  component: Popover,
  tags: ['autodocs'],
  title: 'Components/Popover',
}

export default meta
export type Story = StoryObj<typeof Popover>

export const Simple: Story = {
  args: {},
  render: () => {
    const [popover, setPopover] = useState(false)

    const handleDeleteUser = () => {
      console.log('handleDeleteUser')
      setPopover(false)
    }
    const handleBunInSystem = () => {
      console.log('handleBunInSystem')
      setPopover(false)
    }
    const handleMoreInformation = () => {
      console.log('handleMoreInformation')
      setPopover(false)
    }

    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Popover icon={<DotsHorizontal />} isOpen={popover} onOpenChange={setPopover}>
          <PopoverItem
            icon={<PersonRemoveIcon />}
            name={'Delete User'}
            onClick={handleDeleteUser}
          />
          <PopoverItem
            icon={<BlockedIcon />}
            name={'Bun in the system'}
            onClick={handleBunInSystem}
          />
          <PopoverItem
            icon={<DotsHorizontal />}
            name={'More information'}
            onClick={handleMoreInformation}
          />
        </Popover>
      </div>
    )
  },
}
