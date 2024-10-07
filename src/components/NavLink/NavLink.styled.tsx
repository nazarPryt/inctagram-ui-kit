import { ReactNode } from 'react'

import { css, styled } from 'styled-components'

export const NavLinkWrapper = styled.a<{ $active: boolean }>`
  display: flex;
  align-items: center;
  gap: 15px;

  text-decoration: none;

  ${props => {
    if (props.$active) {
      return css`
        color: ${props => props.theme.palette.primary[500]};
      `
    } else {
      return css`
        color: ${props => props.theme.textColor[100]};
      `
    }
  }}

  path {
    fill: ${props => props.theme.textColor[100]};
  }

  &:hover {
    color: ${props => props.theme.palette.primary[100]};

    path {
      fill: ${props => props.theme.palette.primary[100]};
    }
  }
`
const Wrapper = styled.span<{ $active: boolean }>`
  width: 23px;
  height: 23px;

  svg {
    width: 100%;
    height: 100%;
  }

  path {
    ${props => {
      if (props.$active) {
        return css`
          fill: ${props => props.theme.palette.primary[500]};
        `
      } else {
        return css`
          fill: ${props => props.theme.textColor[100]};
        `
      }
    }}
  }
`

export const NavIconWrapper = (props: { $active: boolean; children: ReactNode }) => {
  return <Wrapper $active={props.$active}>{props.children}</Wrapper>
}
