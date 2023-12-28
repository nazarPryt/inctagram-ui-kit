import { Meta } from '@storybook/react'

import { InputText } from '../InputText'
import { Label } from './Label'

const meta: Meta<typeof Label> = {
  component: Label,
  tags: ['autodocs'],
  title: 'Components/Label',
}

export default meta

export const DefaultWithoutChildren = {
  args: {
    label: 'Some label',
  },
}

export const DefaultWithTextField = {
  args: {
    children: <InputText />,
    label: 'Some label',
  },
}
