import { styled } from 'styled-components'

export const NavButtonWrapper = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: inherit;
  font-weight: inherit;
  font-family: inherit;
  white-space: nowrap;
  background-color: inherit;
  color: ${props => props.theme.textColor['100']};
  border: none;
  padding: 0;

  &:hover {
    color: ${props => props.theme.palette.primary['100']};
    path {
      fill: ${props => props.theme.palette.primary['100']};
    }
  }

  path {
    fill: ${props => props.theme.textColor[100]};
  }
`
