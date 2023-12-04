import { styled } from 'styled-components'

export const TableCellStyled = styled.td`
  padding: 6px 24px;

  font-size: 14px;
  line-height: 24px;

  border-bottom: 1px solid ${props => props.theme.bodyColor[300]};
`
