import { styled } from 'styled-components'

import { typography } from '../../../styles'

export const PopoverItemWrapper = styled.button`
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
  ${typography.regular_text_14}

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
