import { css, styled } from 'styled-components'

export const TabButton = styled.button<{ $active: boolean }>`
  padding: 6px 24px;
  cursor: pointer;
  border-left: none;

  border-right: none;
  border-top: none;
  border-bottom: 2px solid ${props => props.theme.bodyColor['100']};
  font-size: 16px;
  font-weight: 600;
  font-family: Inter, sans-serif;
  letter-spacing: 0.7px;
  color: ${props => props.theme.textColor['100']};
  background-color: inherit;

  ${props => {
    if (props.$active) {
      return css`
        color: ${props => props.theme.palette.primary['500']};
        border-bottom-color: ${props => props.theme.palette.primary['500']};
      `
    }
  }}
`
