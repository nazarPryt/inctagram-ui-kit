import { Select } from '../../../Select'
import { PerPageSelectStyled } from './PerPageSelect.styled'

export type PerPageSelectProps = {
  onPerPageChange: (itemPerPage: number) => void
  perPage: number
  perPageOptions: number[]
  onPage:string
  show:string
}

export const PerPageSelect = ({ onPerPageChange, perPage, perPageOptions, show, onPage }: PerPageSelectProps) => {
  const selectOptions = perPageOptions.map(value => ({
    label: value,
    value,
  }))

  return (
    <PerPageSelectStyled>
      {show}
      <Select
        className={'select'}
        onChange={onPerPageChange}
        options={selectOptions}
        value={perPage}
        variant={'pagination'}
      />
      {onPage}
    </PerPageSelectStyled>
  )
}
