import { Select } from '../../../Select'
import { PerPageSelectStyled } from './PerPageSelect.styled'

export type PerPageSelectProps = {
  onPerPageChange: (itemPerPage: string) => void
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
      Показать
      <Select
        className={'select'}
        onChange={onPerPageChange}
        options={selectOptions}
        value={perPage + ''}
        variant={'pagination'}
      />
      на странице
    </PerPageSelectStyled>
  )
}
