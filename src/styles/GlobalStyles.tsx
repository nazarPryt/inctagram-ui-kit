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
  
  body,header {
      transition:
              200ms background-color,
              200ms color;
      
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
  
  .skeletonContainerFlex {
      flex: 1
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
      background-color: ${({ theme }) => theme.bodyColor['100']};
  }

  &::-webkit-scrollbar {
      width: 10px;
  }

  &::-webkit-scrollbar-thumb {
      border-radius: 3px;
      background-color: ${({ theme }) => theme.palette.primary['100']};
  }
 
`
