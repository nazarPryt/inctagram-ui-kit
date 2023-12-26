import { DotsHorizontal } from '../../../../icons'
import { PageButton } from '../PageButton'

export type MainPaginationButtonsProps = {
  currentPage: number
  onClick: (pageNumber: number) => () => void
  paginationRange: (number | string)[]
}

export const MainPaginationButtons = ({
  currentPage,
  onClick,
  paginationRange,
}: MainPaginationButtonsProps) => {
  return (
    <>
      {paginationRange.map((page: number | string, index) => {
        const isSelected = page === currentPage

        if (typeof page !== 'number') {
          return <DotsHorizontal key={index} />
        }

        return <PageButton key={index} onClick={onClick(page)} page={page} selected={isSelected} />
      })}
    </>
  )
}
