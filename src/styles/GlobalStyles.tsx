import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    overflow-y: scroll;
   
  }

  body {
    background-color: ${({ theme }) => theme.bodyColor['700']};
    color: ${({ theme }) => theme.textColor['100']};
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    height: 100vh;
    margin: 0;

    &.isModalOpen {
      overflow: hidden;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }

  img {
    width: 100%;
    height: 100%;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  //~~~~-autofills for inputs
  //https://css-tricks.com/almanac/selectors/a/autofill/
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    -webkit-text-fill-color: ${({ theme }) => theme.textColor['100']};
    -webkit-box-shadow: 0 0 0 40rem ${({ theme }) => theme.bodyColor['500']} inset;
  }


  //~~~~ScrollBar
  //https://codepen.io/devstreak/pen/dMYgeO
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.6);
    background-color: #CCCCCC;
  }

  &::-webkit-scrollbar {
    display: none;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #FFF;
    background-image: -webkit-linear-gradient(90deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 1) 25%,
    transparent 100%,
    rgba(0, 0, 0, 1) 75%,
    transparent)
  }
  .skeletonContainerFlex {
      flex: 1
  }
`
