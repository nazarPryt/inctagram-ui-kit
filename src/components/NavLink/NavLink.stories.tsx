import type { Meta, StoryObj } from '@storybook/react'

import { withThemeDecorator } from '../../decorators/withThemeDecorator'
import { NavLink } from './NavLink'

const meta = {
  args: {},
  component: NavLink,
  tags: ['autodocs'],
  title: 'Components/NavLink',
} satisfies Meta<typeof NavLink>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    href: '/',
    icon: (
      <svg
        fill={'none'}
        height={'20'}
        viewBox={'-0.5 0 18 20'}
        width={'18'}
        xmlns={'http://www.w3.org/2000/svg'}
      >
        <path
          d={
            'M17.4201 8.17999L9.71012 0.299994C9.61715 0.206266 9.50655 0.131872 9.38469 0.0811031C9.26283 0.0303344 9.13213 0.00419617 9.00012 0.00419617C8.8681 0.00419617 8.7374 0.0303344 8.61554 0.0811031C8.49368 0.131872 8.38308 0.206266 8.29012 0.299994L0.580115 8.18999C0.393552 8.37806 0.24621 8.60132 0.146643 8.8468C0.0470768 9.09229 -0.00272978 9.3551 0.000115364 9.61999V18C-0.00065946 18.5119 0.194889 19.0046 0.54649 19.3767C0.898091 19.7488 1.37898 19.9718 1.89012 20H16.1101C16.6213 19.9718 17.1021 19.7488 17.4537 19.3767C17.8053 19.0046 18.0009 18.5119 18.0001 18V9.61999C18.0009 9.08293 17.7929 8.56658 17.4201 8.17999ZM7.00012 18V12H11.0001V18H7.00012ZM16.0001 18H13.0001V11C13.0001 10.7348 12.8948 10.4804 12.7072 10.2929C12.5197 10.1054 12.2653 9.99999 12.0001 9.99999H6.00012C5.7349 9.99999 5.48055 10.1054 5.29301 10.2929C5.10547 10.4804 5.00012 10.7348 5.00012 11V18H2.00012V9.57999L9.00012 2.42999L16.0001 9.61999V18Z'
          }
          fill={'white'}
        />
      </svg>
    ),
    name: 'NavLink',
  },
  decorators: [withThemeDecorator],
}
