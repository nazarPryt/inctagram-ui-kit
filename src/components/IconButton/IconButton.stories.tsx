import type { Meta, StoryObj } from '@storybook/react'

import { withThemeDecorator } from '../../decorators/withThemeDecorator'
import { IconButton } from './IconButton'

const meta = {
  args: {},
  component: IconButton,
  tags: ['autodocs'],
  title: 'Components/IconButton',
} satisfies Meta<typeof IconButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
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
  },
  decorators: [withThemeDecorator],
}

export const Colorful: Story = {
  args: {
    children: (
      <svg
        fill={'none'}
        height={'36'}
        viewBox={'0 0 36 36'}
        width={'36'}
        xmlns={'http://www.w3.org/2000/svg'}
      >
        <g clipPath={'url(#clip0_3663_9513)'}>
          <path
            d={
              'M7.8993 14.6468C9.29818 10.4079 13.2817 7.36364 18 7.36364C20.5364 7.36364 22.8273 8.26364 24.6273 9.73636L29.8636 4.5C26.6727 1.71818 22.5818 0 18 0C10.9051 0 4.79662 4.04745 1.85999 9.97504L7.8993 14.6468Z'
            }
            fill={'#EA4335'}
          />
          <path
            d={
              'M24.0611 27.0189C22.4264 28.0744 20.3491 28.6364 18 28.6364C13.2997 28.6364 9.32869 25.6153 7.91548 21.4018L1.8562 26.0025C4.78919 31.9404 10.8975 36 18 36C22.3993 36 26.603 34.4361 29.7513 31.4994L24.0611 27.0189Z'
            }
            fill={'#34A853'}
          />
          <path
            d={
              'M29.7513 31.4994C33.0438 28.4282 35.1818 23.8555 35.1818 18C35.1818 16.9364 35.0182 15.7909 34.7727 14.7273H18V21.6818H27.6545C27.1782 24.0204 25.8995 25.8318 24.0611 27.0189L29.7513 31.4994Z'
            }
            fill={'#4A90E2'}
          />
          <path
            d={
              'M7.91547 21.4018C7.55749 20.3345 7.36364 19.1906 7.36364 18C7.36364 16.8274 7.55165 15.7002 7.8993 14.6468L1.85999 9.97504C0.654881 12.3906 0 15.1131 0 18C0 20.8793 0.667171 23.5953 1.85619 26.0025L7.91547 21.4018Z'
            }
            fill={'#FBBC05'}
          />
        </g>
        <defs>
          <clipPath id={'clip0_3663_9513'}>
            <rect fill={'white'} height={'36'} width={'36'} />
          </clipPath>
        </defs>
      </svg>
    ),
    colorful: true,
  },
  decorators: [withThemeDecorator],
}
