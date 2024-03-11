import { createGlobalStyle } from 'styled-components';
import { COLORS } from './colors';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before{
    box-sizing: border-box;
    
  }

  img{
    display: block;
    max-width: 100%;
  }
  
  body{
    margin: 0;
    font-family: "Manrope", sans-serif;
    background-color: ${COLORS.Dark_Blue};
    padding-block: 2rem;
    height: 100vh;
    width: 85%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;

  }

  a{
    text-decoration: none;
    color: inherit;
  }

  ul{
    list-style: none;
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
  }
`;
