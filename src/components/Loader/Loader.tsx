import styled, {keyframes} from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg);
  }
`
export const Loader = styled.span`
    position: fixed;
    top: 50%;
    left: 50%;
    width: 100px;
    height: 100px;
    z-index: 10;

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
`
