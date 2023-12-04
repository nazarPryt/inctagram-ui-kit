import {Meta, StoryObj} from '@storybook/react'
import {AvatarIcon} from './AvatarIcon'

const meta: Meta<typeof AvatarIcon> = {
    title: 'Components/AvatarIcon',
    component: AvatarIcon,
    tags: ['docsPage'],
    argTypes: {},
}

export default meta
type Story = StoryObj<typeof AvatarIcon>

export const Default: Story = {
    args: {
        img: 'https://loremflickr.com/50/50',
        userID: 20,
    },
}
