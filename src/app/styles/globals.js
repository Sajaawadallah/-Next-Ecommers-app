

import { createGlobalStyle, styled } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  
  } 
  
  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
   
  
  } 
  
  
  a {
    color: inherit;
    text-decoration: none;
  }
`;


export const Container = styled.div`
  max-width: 85%;
   margin: 0 auto;
`

export const Row = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
flex-wrap: wrap;
`

export const Col = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 1.3rem;

`

export default GlobalStyle
