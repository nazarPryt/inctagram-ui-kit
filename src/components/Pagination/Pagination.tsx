import { ArrowBack, ArrowForward, DotsHorizontal } from '../../icons'
import { usePagination } from './usePagination'

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
    <div>
      <div>
        <PrevButton disabled={isFirstPage} onClick={handlePreviousPageClicked} />

        <MainPaginationButtons
          currentPage={page}
          onClick={handleMainPageClicked}
          paginationRange={paginationRange}
        />

        <NextButton disabled={isLastPage} onClick={handleNextPageClicked} />
      </div>
    </div>
  )
}

type NavigationButtonProps = {
  disabled?: boolean
  onClick: () => void
}

type PageButtonProps = NavigationButtonProps & {
  page: number
  selected: boolean
}

const PageButton = ({ disabled, onClick, page, selected }: PageButtonProps) => {
  return (
    <button disabled={selected || disabled} onClick={onClick}>
      {page}
    </button>
  )
}
const PrevButton = ({ disabled, onClick }: NavigationButtonProps) => {
  return (
    <button disabled={disabled} onClick={onClick}>
      <ArrowBack />
    </button>
  )
}

const NextButton = ({ disabled, onClick }: NavigationButtonProps) => {
  return (
    <button disabled={disabled} onClick={onClick}>
      <ArrowForward />
    </button>
  )
}

type MainPaginationButtonsProps = {
  currentPage: number
  onClick: (pageNumber: number) => () => void
  paginationRange: (number | string)[]
}

const MainPaginationButtons = ({
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

// import { BlockedIcon } from '../../icons'
// import { PaginationStyled } from './Pagination.styled'
//
// //https://www.npmjs.com/package/react-paginate
//
// type PaginationType = {
//   onPageChange: (selectedItem: { selected: number }) => void
//   pageCount: number
// }
// export const Pagination = ({ onPageChange, pageCount }: PaginationType) => {
//   return (
//     <PaginationStyled
//       activeClassName={'active'}
//       breakClassName={'page-item'}
//       breakLabel={'...'}
//       breakLinkClassName={'page-link'}
//       containerClassName={'pagination'}
//       marginPagesDisplayed={5}
//       nextClassName={'page-item'}
//       nextLabel={<BlockedIcon />}
//       nextLinkClassName={'page-link'}
//       onPageChange={onPageChange}
//       pageClassName={'page-item'}
//       pageCount={pageCount}
//       pageLinkClassName={'page-link'}
//       pageRangeDisplayed={3}
//       previousClassName={'page-item'}
//       previousLabel={<BlockedIcon />}
//       previousLinkClassName={'page-link'}
//       renderOnZeroPageCount={null}
//     />
//   )
// }
