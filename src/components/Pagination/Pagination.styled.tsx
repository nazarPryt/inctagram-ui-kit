import { styled } from 'styled-components'

import { PageButtonItem } from './Pagination'

export const PaginationStyled = styled.div`
  display: flex;
  gap: 25px;
  align-items: center;

  .container {
    display: flex;
    gap: 12px;
    list-style-type: none;
  }
  ${PageButtonItem}
  svg {
    path {
      fill: ${props => props.theme.textColor[100]};
    }
  }
`
