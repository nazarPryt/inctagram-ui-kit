import { useState } from '@storybook/preview-api'
import { Meta, StoryObj } from '@storybook/react'

import { Select } from './Select'
import { options, optionsPagination } from './optionsForSelectStory'

const meta: Meta<typeof Select> = {
  args: { variant: 'primary' },
  component: Select,
  tags: ['autodocs'],
  title: 'Components/Select',
}

export default meta
export type Story = StoryObj<typeof Select>

export const Simple: Story = {
  args: {
    disabled: false,
    options,
    placeholder: 'Все курсы',
  },

  render: (args: any) => {
    const [value, setValue] = useState(null)

    return (
      <>
        <Select {...args} onChange={setValue} value={value} />
        <div>Selected value: {value}</div>
      </>
    )
  },
}

export const Pagination: Story = {
  args: {
    disabled: false,
    options: optionsPagination,
    placeholder: '1',
    variant: 'pagination',
    width: 50,
  },

  render: (args: any) => {
    const [value, setValue] = useState(null)

    return (
      <>
        <Select {...args} onChange={setValue} v value={value} />
        <div>Selected value: {value}</div>
      </>
    )
  },
}

export const SimpleWithLabel: Story = {
  args: {
    disabled: false,
    label: 'Курс*',
    options,
    placeholder: 'Все курсы',
  },

  render: (args: any) => {
    const [value, setValue] = useState(null)

    return (
      <>
        <Select {...args} onChange={setValue} value={value} />
        <div>Selected value: {value}</div>
      </>
    )
  },
}

export const Multiple: Story = {
  args: {
    disabled: false,
    multiple: true,
    options,
    placeholder: 'Все курсы',
  },

  render: (args: any) => {
    const [values, setValues] = useState([])

    return (
      <>
        <Select {...args} multiple onChange={setValues} value={values} />
        <div>Selected values: {values.join(', ')}</div>
      </>
    )
  },
}

export const Error: Story = {
  args: {
    disabled: false,
    errorMessage: 'Ошибка',
    options,
    placeholder: 'Все курсы',
  },

  render: (args: any) => {
    const [value, setValue] = useState(null)

    return (
      <>
        <Select {...args} onChange={setValue} value={value} />
        <div>Selected value: {value}</div>
      </>
    )
  },
}

export const Secondary: Story = {
  args: {
    disabled: false,
    options,
    placeholder: 'Все курсы',
    variant: 'secondary',
  },

  render: (args: any) => {
    const [value, setValue] = useState(null)

    return (
      <>
        <Select {...args} onChange={setValue} value={value} />
        <div>Selected value: {value}</div>
      </>
    )
  },
}

export const SmallWithLongItemNames: Story = {
  args: {
    disabled: false,
    options,
    placeholder: 'Все курсы',
  },

  render: (args: any) => {
    const [value, setValue] = useState(null)

    return (
      <>
        <div style={{ width: 200 }}>
          <Select {...args} onChange={setValue} value={value} />
        </div>
        <div>Selected value: {value}</div>
      </>
    )
  },
}
//
// export const onModal: Story = () => {
//   const [value, setValue] = useState(null)
//   const [value1, setValue1] = useState(null)
//   const [value2, setValue2] = useState(null)
//   const [value3, setValue3] = useState(null)
//   const [open, setOpen] = useState(false)
//   const handleClose = () => {
//     setOpen(false)
//   }
//
//   return (
//     <div>
//       <button onClick={() => setOpen(!open)}>Open modal</button>
//       <Modal onClose={handleClose} open={open} title={'Select'}>
//         <VerticalContainer>
//           <Select
//             disabled={false}
//             onChange={setValue}
//             options={options}
//             placeholder={'Все курсы'}
//             portal={false}
//             value={value}
//           />
//           <Select
//             disabled={false}
//             onChange={setValue1}
//             options={options}
//             placeholder={'Все курсы'}
//             portal={false}
//             value={value1}
//           />
//           <Select
//             disabled={false}
//             onChange={setValue2}
//             options={options}
//             placeholder={'Все курсы'}
//             portal={false}
//             value={value2}
//           />
//           <Select
//             disabled={false}
//             onChange={setValue3}
//             options={options}
//             placeholder={'Все курсы'}
//             portal={false}
//             value={value3}
//           />
//         </VerticalContainer>
//       </Modal>
//     </div>
//   )
// }
