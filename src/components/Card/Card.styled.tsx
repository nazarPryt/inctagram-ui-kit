import { styled } from 'styled-components'

export const CardStyled = styled.div`
  padding: 20px;

  background-color: ${props => props.theme.bodyColor[500]};
  border: 1px solid ${props => props.theme.bodyColor[300]};
`
