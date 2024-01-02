import { Select } from '../../../Select'
import { PerPageSelectStyled } from './PerPageSelect.styled'

export type PerPageSelectProps = {
  onPerPageChange: (itemPerPage: number) => void
  perPage: number
  perPageOptions: number[]
}

export const PerPageSelect = ({ onPerPageChange, perPage, perPageOptions }: PerPageSelectProps) => {
  const selectOptions = perPageOptions.map(value => ({
    label: value,
    value,
  }))

  return (
    <PerPageSelectStyled>
      Show
      <Select
        className={'select'}
        onChange={onPerPageChange}
        options={selectOptions}
        value={perPage}
        variant={'pagination'}
      />
      on page
    </PerPageSelectStyled>
  )
}
