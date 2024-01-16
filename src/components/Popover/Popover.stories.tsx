import { useState } from '@storybook/preview-api'
import { Meta, StoryObj } from '@storybook/react'

import { BlockedIcon, DotsHorizontal, PersonRemoveIcon } from '../../icons'
import { Popover } from './Popover'
import { PopoverItem } from './PopoverItem'

const meta: Meta<typeof Popover> = {
  component: Popover,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  title: 'Components/Popover',
}

export default meta
type Story = StoryObj<typeof Popover>

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

    return (
      <Popover icon={<DotsHorizontal />} isOpen={popover} onOpenChange={setPopover}>
        <PopoverItem icon={<PersonRemoveIcon />} name={'Delete User'} onClick={handleDeleteUser} />
        <PopoverItem
          icon={<BlockedIcon />}
          name={'Bun in the system'}
          onClick={handleBunInSystem}
        />
        <PopoverItem as={'a'} href={'/'} icon={<DotsHorizontal />} name={'More information'} />
      </Popover>
    )
  },
}
