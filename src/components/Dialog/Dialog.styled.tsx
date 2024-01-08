import { css, styled } from 'styled-components'

export const DialogButtonsBox = styled.div<{ $showCancelButton: boolean }>`
  display: flex;
  justify-content: flex-end;

  ${props => {
    if (props.$showCancelButton) {
      return css`
        justify-content: space-evenly;
      `
    }
  }}
`
