import { css, styled } from 'styled-components'

export type IconButtonProps = {
  $active?: boolean
  $colorful?: boolean
  $size: number
}
export const IconButtonStyled = styled.button<IconButtonProps>`
  display: flex;
  align-content: center;
  justify-content: center;
  border: none;
  background-color: transparent;
  cursor: pointer;
  width: ${props => props.$size}px;
  height: ${props => props.$size}px;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(1);
  }
  svg{
    width: ${props => props.$size}px;
    height: ${props => props.$size}px;
  }

  path {
        ${props => {
          if (props.$active) {
            return css`
              fill: ${props => props.theme.palette.primary['500']};
            `
          }
          if (!props.$colorful) {
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
