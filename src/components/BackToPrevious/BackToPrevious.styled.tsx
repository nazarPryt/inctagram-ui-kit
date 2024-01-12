import Link from 'next/link'
import { styled } from 'styled-components'

import { typography } from '../../styles'
import { IconColor } from '../../styles/mixins/IconColor'

export const BackToPreviousWrapper = styled(Link)`
  position: relative;
  cursor: pointer;
  display: flex;
  justify-content: center;
  text-decoration: none;
  color: ${props => props.theme.textColor[100]};
  font-family: inherit;

  ${IconColor}
  ${typography.Medium_text_14}
  
  &:hover {
    color: ${props => props.theme.textColor[500]};

    &::after {
      content: '';

      position: absolute;
      bottom: -2px;
      left: 0;

      width: 100%;
      height: 1px;

      outline: 1px solid ${props => props.theme.textColor[500]};
    }
  }
  span {
    margin-left: 15px;
  }
`
