import { Meta, type StoryObj } from '@storybook/react'

import { Card } from './Card'

const meta: Meta<typeof Card> = {
  component: Card,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  title: 'Components/Card',
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <p>
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
  },
}
