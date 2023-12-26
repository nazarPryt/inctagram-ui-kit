import { PaginationStyled } from './Pagination.styled'
import { usePagination } from './hook/usePagination'
import { MainPaginationButtons } from './ui/MainPaginationButtons'
import { NextButton, PrevButton } from './ui/PrevNextButtons'

type PaginationConditionals =
  | {
      onPerPageChange: (itemPerPage: number) => void
      perPage: number
      perPageOptions: number[]
    }
  | {
      onPerPageChange?: never
      perPage?: null
      perPageOptions?: never
    }

export type PaginationProps = {
  count: number
  onChange: (page: number) => void
  onPerPageChange?: (itemPerPage: number) => void
  page: number
  perPage?: number
  perPageOptions?: number[]
  siblings?: number
} & PaginationConditionals

export const Pagination = ({ count, onChange, page, siblings }: PaginationProps) => {
  const {
    handleMainPageClicked,
    handleNextPageClicked,
    handlePreviousPageClicked,
    isFirstPage,
    isLastPage,
    paginationRange,
  } = usePagination({
    count,
    onChange,
    page,
    siblings,
  })

  return (
    <PaginationStyled>
      <div className={'paginationContainer'}>
        <PrevButton disabled={isFirstPage} onClick={handlePreviousPageClicked} />

        <MainPaginationButtons
          currentPage={page}
          onClick={handleMainPageClicked}
          paginationRange={paginationRange}
        />

        <NextButton disabled={isLastPage} onClick={handleNextPageClicked} />
      </div>
    </PaginationStyled>
  )
}
