import { Select } from '../../../Select'
import { PerPageSelectStyled } from './PerPageSelect.styled'

export type PerPageSelectProps = {
  onPage: string
  onPerPageChange: (itemPerPage: number) => void
  perPage: number
  perPageOptions: number[]
  show: string
}

export const PerPageSelect = ({
  onPage,
  onPerPageChange,
  perPage,
  perPageOptions,
  show,
}: PerPageSelectProps) => {
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
