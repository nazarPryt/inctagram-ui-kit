import Link from 'next/link'
import { styled } from 'styled-components'

import { IconColor, typography } from '../../styles'

export const BackToPreviousWrapper = styled(Link)`
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  text-decoration: none;
  color: ${props => props.theme.textColor[100]};
  font-family: inherit;

  ${IconColor}
  ${typography.Medium_text_14}
  

    &:hover {
    color: ${props => props.theme.textColor[500]};
    text-decoration: underline;
  }

  span {
    margin-left: 15px;
  }
`
