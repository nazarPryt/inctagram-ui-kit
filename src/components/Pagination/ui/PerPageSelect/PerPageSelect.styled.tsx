import { styled } from 'styled-components'

export const PerPageSelectStyled = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;

  color: ${props => props.theme.textColor[100]};
  white-space: nowrap;

  .select {
    flex-shrink: 0;
    width: 60px;
  }
`
