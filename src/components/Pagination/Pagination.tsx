import { BlockedIcon } from '../../icons'
import { PaginationStyled } from './Pagination.styled'

//https://www.npmjs.com/package/react-paginate

type PaginationType = {
  onPageChange: (selectedItem: { selected: number }) => void
  pageCount: number
}
export const Pagination = ({ onPageChange, pageCount }: PaginationType) => {
  return (
    <PaginationStyled
      activeClassName={'active'}
      breakClassName={'page-item'}
      breakLabel={'...'}
      breakLinkClassName={'page-link'}
      containerClassName={'pagination'}
      marginPagesDisplayed={2}
      nextClassName={'page-item'}
      nextLabel={<BlockedIcon />}
      nextLinkClassName={'page-link'}
      onPageChange={onPageChange}
      pageClassName={'page-item'}
      pageCount={pageCount}
      pageLinkClassName={'page-link'}
      pageRangeDisplayed={2}
      previousClassName={'page-item'}
      previousLabel={'< previous'}
      previousLinkClassName={'page-link'}
      renderOnZeroPageCount={null}
    />
  )
}
