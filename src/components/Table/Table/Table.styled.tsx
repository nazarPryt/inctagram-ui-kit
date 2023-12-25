import { styled } from 'styled-components'

export const TableStyled = styled.table`
  border-collapse: collapse;
  color: ${props => props.theme.textColor[100]};
  border: ${props => props.theme.bodyColor[100]};

  svg {
    path {
      fill: ${props => props.theme.textColor[100]};
    }
    line {
      stroke: ${props => props.theme.textColor[100]};
    }
  }
`
