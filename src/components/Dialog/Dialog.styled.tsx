import { styled } from 'styled-components'

export const DialogButtonsBox = styled.div`
  .buttonsBox {
    display: flex;
    justify-content: flex-end;

    &.hasCancelButton {
      justify-content: space-between;
    }

    &.mobile {
      flex-direction: column-reverse;
      gap: 12px;
    }
  }
`
