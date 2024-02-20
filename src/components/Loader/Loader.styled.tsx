import { keyframes, styled } from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg);
  }
`

export const LoaderStyled = styled.div<{ $fullScreen?: boolean; $size?: number }>`
  position: ${props => (props.$fullScreen ? 'fixed' : '')};
  top: ${props => (props.$fullScreen ? 0 : '')};
  left: ${props => (props.$fullScreen ? 0 : '')};

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: ${props => (props.$fullScreen ? '100vh' : '100%')};

  background-color: ${props => props.theme.bodyColor[900]}15;
  z-index: 103;

  span {
    display: inline-block;
    position: relative;
    height: ${props => props.$size}px;
    width: ${props => props.$size}px;

    &:before,
    &:after {
      content: '';
      border-radius: 50%;
      position: absolute;
      inset: 0;
      box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.3) inset;
    }

    &:after {
      box-shadow: 0 2px 0 #ff3d00 inset;
      animation: ${rotate} 1s linear infinite;
    }
  }
`
