import { PaginationStyled } from './Pagination.styled'
import { usePagination } from './hook/usePagination'
import { MainPaginationButtons } from './ui/MainPaginationButtons'
import { PerPageSelect } from './ui/PerPageSelect/PerPageSelect'
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
  onPage?: string
  page: number
  show?: string
  siblings?: number
} & PaginationConditionals

export const Pagination = ({
  count,
  onChange,
  onPage = 'on page',
  onPerPageChange,
  page,
  perPage,
  perPageOptions,
  show = 'show',
  siblings,
}: PaginationProps) => {
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
  const showPerPageSelect = !!perPage && !!perPageOptions && !!onPerPageChange

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
      {showPerPageSelect && (
        <PerPageSelect
          {...{
            onPage,
            onPerPageChange,
            perPage,
            perPageOptions,
            show,
          }}
        />
      )}
    </PaginationStyled>
  )
}
