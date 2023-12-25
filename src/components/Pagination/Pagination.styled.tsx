import ReactPaginate from 'react-paginate'

import { styled } from 'styled-components'

export const PaginationStyled = styled(ReactPaginate)`
  .pagination {
    display: flex;
  }
  .active {
    color: red !important;
  }
  .page-item {
    color: cornflowerblue;
    cursor: pointer;
  }
`
