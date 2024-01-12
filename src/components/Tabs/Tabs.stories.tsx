import type { Meta, StoryObj } from '@storybook/react'

import { TabContent, Tabs } from './Tabs'

const meta = {
  args: {
    children: (
      <>
        <TabContent value={'sprints'}>Контент спринтов</TabContent>
        <TabContent value={'weeks'}>Контент недель</TabContent>
        <TabContent value={'subjects'}>Контент тем</TabContent>
      </>
    ),
    defaultValue: 'sprints',
    tabs: [
      { title: 'Спринты', value: 'sprints' },
      { title: 'Недели', value: 'weeks' },
      { title: 'Темы', value: 'subjects' },
    ],
  },
  component: Tabs,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  title: 'Components/Tabs',
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

export const PrimaryWithDisabled: Story = {
  args: {
    tabs: [
      { title: 'Спринты', value: 'sprints' },
      { title: 'Недели', value: 'weeks' },
      { disabled: true, title: 'Темы', value: 'subjects' },
    ],
  },
}

export const FullWidth: Story = {
  args: {
    fullWidth: true,
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
}

export const SecondaryWithDisabled: Story = {
  args: {
    ...Secondary.args,
    tabs: [
      { title: 'Спринты', value: 'sprints' },
      { title: 'Недели', value: 'weeks' },
      { disabled: true, title: 'Темы', value: 'subjects' },
    ],
  },
}
