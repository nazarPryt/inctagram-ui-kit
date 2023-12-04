import Link from 'next/link'
import { styled } from 'styled-components'

export const BackToPreviousWrapper = styled(Link)`
  display: flex;
  justify-content: center;
  cursor: pointer;
  text-decoration: none;
  color: ${props => props.theme.textColor['100']};

  span {
    margin-left: 15px;
  }
`
