import { styled } from 'styled-components'

import { PageButtonItemMixin } from './ui/PageButton/PageButton.styled'

export const PaginationStyled = styled.div`
  display: flex;
  gap: 25px;
  align-items: center;

  .paginationContainer {
    display: flex;
    gap: 12px;
    list-style-type: none;
  }
  ${PageButtonItemMixin}

  svg {
    path {
      fill: ${props => props.theme.textColor[100]};
    }
  }
`
