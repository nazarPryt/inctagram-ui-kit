import { Meta, type StoryObj } from '@storybook/react'

import { Scrollbar } from './Scrollbar'

const meta: Meta<typeof Scrollbar> = {
  argTypes: {
    type: {
      control: { type: 'radio' },
      options: ['auto', 'always', 'scroll', 'hover'],
    },
  },
  component: Scrollbar,
  title: 'Components/Scrollbar',
}

export default meta
type Story = StoryObj<typeof meta>

export const VerticalScrollbar: Story = {
  args: {
    children: (
      <p style={{ width: '100px' }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, autem, beatae debitis,
        earum maiores nam omnis perspiciatis quas quasi ratione tenetur voluptas voluptatem!
        Blanditiis ducimus, excepturi iste iure quos veritatis. Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Adipisci, autem, beatae debitis, earum maiores nam omnis
        perspiciatis quas quasi ratione tenetur voluptas voluptatem! Blanditiis ducimus, excepturi
        iste iure quos veritatis. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Adipisci, autem, beatae debitis, earum maiores nam omnis perspiciatis quas quasi ratione
        tenetur voluptas voluptatem! Blanditiis ducimus, excepturi iste iure quos veritatis.
      </p>
    ),
    style: {
      color: 'red',
      height: '200px',
      paddingRight: '8px',
      width: 'fit-content',
    },
  },
}

export const HorizontalScrollbar: Story = {
  args: {
    children: (
      <p style={{ width: '400px' }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, autem, beatae debitis,
        earum maiores nam omnis perspiciatis quas quasi ratione tenetur voluptas voluptatem!
        Blanditiis ducimus, excepturi iste iure quos veritatis. Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Adipisci, autem, beatae debitis, earum maiores nam omnis
        perspiciatis quas quasi ratione tenetur voluptas voluptatem! Blanditiis ducimus, excepturi
        iste iure quos veritatis. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Adipisci, autem, beatae debitis, earum maiores nam omnis perspiciatis quas quasi ratione
        tenetur voluptas voluptatem! Blanditiis ducimus, excepturi iste iure quos veritatis.
      </p>
    ),
    style: { color: 'red', width: '100px' },
  },
}
