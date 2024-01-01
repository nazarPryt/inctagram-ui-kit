import { css } from 'styled-components'

export const IconColor = css`
  svg {
    path {
      fill: ${props => props.theme.textColor['500']};
    }
    line {
      stroke: ${props => props.theme.textColor['500']};
    }
  }

  // &:hover {
  //   path {
  //     fill: ${props => props.theme.palette.primary[100]};
  //   }
  //   line {
  //     stroke: ${props => props.theme.palette.primary[100]};
  //   }
  // }
`
