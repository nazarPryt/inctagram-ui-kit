import { css, styled } from 'styled-components'

export const DialogButtonsBox = styled.div<{ $showCancelButton: boolean }>`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;

  ${props => {
    if (props.$showCancelButton) {
      return css`
        justify-content: space-evenly;
      `
    }
  }}
`
