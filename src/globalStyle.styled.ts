import breakPonits from "constants/breakPoints";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * , *::before , *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    
    @media screen and (max-width : ${breakPonits.md}) {
    font-size: 56.25%;
    }
  }

  body {
    font-family:  Helvetica,Arial, sans-serif;
    font-size: 1.4rem;
    color: #000000cc;
  }
  li {
    list-style: none;
  }
`;

export default GlobalStyles;

export const Wrapper = styled.div`
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  padding: 0 8px;
`;
