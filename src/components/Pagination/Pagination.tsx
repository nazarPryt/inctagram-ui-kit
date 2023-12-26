import { css, styled } from 'styled-components'

import { ArrowBack, ArrowForward, DotsHorizontal } from '../../icons'
import { PaginationStyled } from './Pagination.styled'
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
    <PaginationStyled>
      <div className={'container'}>
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

type NavigationButtonProps = {
  disabled?: boolean
  onClick: () => void
}

type PageButtonProps = NavigationButtonProps & {
  page: number
  selected: boolean
}
export const PageButtonItem = css`
  all: unset;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 24px;
  height: 24px;

  color: ${props => props.theme.textColor[100]};

  border-radius: 5px;
  cursor: pointer;

  &:focus-visible {
    outline: 2px solid cyan;
  }

  &:disabled {
    cursor: initial;
    opacity: 1;
  }

  &:hover:not(&:disabled) {
    background-color: ${props => props.theme.bodyColor[100]};
  }
`

export const PageButtonStyled = styled.button<{ $selected?: boolean }>`
  ${PageButtonItem}

  ${props => {
    if (props.$selected) {
      return css`
        color: ${props => props.theme.textColor[100]};
        background-color: ${props => props.theme.bodyColor[100]};
      `
    }
  }}
`

const PageButton = ({ disabled, onClick, page, selected }: PageButtonProps) => {
  return (
    <PageButtonStyled $selected={selected} disabled={selected || disabled} onClick={onClick}>
      {page}
    </PageButtonStyled>
  )
}
const PrevButton = ({ disabled, onClick }: NavigationButtonProps) => {
  return (
    <PageButtonStyled disabled={disabled} onClick={onClick}>
      <ArrowBack />
    </PageButtonStyled>
  )
}

const NextButton = ({ disabled, onClick }: NavigationButtonProps) => {
  return (
    <PageButtonStyled disabled={disabled} onClick={onClick}>
      <ArrowForward />
    </PageButtonStyled>
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
