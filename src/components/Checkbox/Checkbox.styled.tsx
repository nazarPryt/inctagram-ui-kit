import { styled } from 'styled-components'

export const CheckboxWrapper = styled.label`
  display: inline-flex;
  align-items: center;

  input[type='checkbox'] {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  .checkboxIcon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
`
