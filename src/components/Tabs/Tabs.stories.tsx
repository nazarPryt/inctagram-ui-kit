import type { Meta, StoryObj } from '@storybook/react'

import { TabContent, Tabs } from './Tabs'

const meta = {
  args: {
    children: (
      <>
        <TabContent value={'sprints'}>Content for sprints</TabContent>
        <TabContent value={'weeks'}>Content for weeks</TabContent>
        <TabContent value={'subjects'}>Content for subjects</TabContent>
      </>
    ),
    defaultValue: 'sprints',
    tabs: [
      { title: 'Sprints', value: 'sprints' },
      { title: 'Weeks', value: 'weeks' },
      { title: 'Subject', value: 'subjects' },
    ],
  },
  component: Tabs,
  tags: ['autodocs'],
  title: 'Components/Tabs',
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

export const PrimaryWithDisabled: Story = {
  args: {
    tabs: [
      { title: 'Sprints', value: 'sprints' },
      { title: 'Weeks', value: 'weeks' },
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
      { title: 'Sprints', value: 'sprints' },
      { title: 'Weeks', value: 'weeks' },
      { disabled: true, title: 'Темы', value: 'subjects' },
    ],
  },
}
