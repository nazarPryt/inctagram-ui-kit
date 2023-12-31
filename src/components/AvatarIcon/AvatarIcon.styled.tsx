import Link from 'next/link'
import { styled } from 'styled-components'

export const AvatarIconWrapper = styled(Link)`
  flex-shrink: 0;

  img,
  svg {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    object-fit: fill;
  }
  path {
    fill: ${props => props.theme.textColor[100]};
  }
`
