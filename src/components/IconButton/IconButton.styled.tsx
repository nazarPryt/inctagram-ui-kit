import { css, styled } from 'styled-components'

export type IconButtonProps = {
  active?: boolean
  colorful?: boolean
}
export const IconButtonStyled = styled('button').withConfig({
  shouldForwardProp: prop => !['active', 'colorful'].includes(prop),
})<IconButtonProps>`
  border: none;
  background-color: transparent;
  cursor: pointer;
  width: 35px;
  height: 35px;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(1);
  }

  path {
        ${props => {
          if (props.active) {
            return css`
              fill: ${props => props.theme.palette.primary['500']};
            `
          }
          if (!props.colorful) {
            return css`
              fill: ${props =>
                props.theme.name === 'dark'
                  ? props.theme.textColor['100']
                  : props => props.theme.textColor['100']};
            `
          }
        }}
    }
  }
`
// export const Nazar = styled.button<{nazar?: string}>`
//     width: 100px;
//     height: 100px;
//     background: ${({nazar}) => (nazar === 'yes' ? 'green' : 'red')};
// `
