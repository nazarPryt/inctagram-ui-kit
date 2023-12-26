import { css, styled } from 'styled-components'

export const PageButtonItemMixin = css`
  all: unset;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 24px;
  height: 24px;

  color: ${props => props.theme.textColor[100]};

  border-radius: 5px;
  cursor: pointer;

  &:focus-visible {
    outline: 2px solid cyan;
  }

  &:disabled {
    cursor: initial;
    opacity: 1;
  }

  &:hover:not(&:disabled) {
    background-color: ${props => props.theme.bodyColor[100]};
  }
`

export const PageButtonStyled = styled.button<{ $selected?: boolean }>`
  ${PageButtonItemMixin}

  ${props => {
    if (props.$selected) {
      return css`
        color: ${props => props.theme.textColor[100]};
        background-color: ${props => props.theme.bodyColor[100]};
      `
    }
  }}
`
