import colors from 'constants/colors'
import breakPonits from 'constants/breakPoints'
import styled, { createGlobalStyle } from 'styled-components'

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
    background-color: #f5f5f5
  }

  li {
    list-style: none;
  }

  input {
    color: inherit;
    font: inherit;
  }

  img {
    max-width: 100%;
  }

  .custom-dropdown {
    
    li.ant-dropdown-menu-item.ant-dropdown-menu-item-only-child {
    background-color: transparent !important;

    &:hover {
      color: ${colors.orange};
    }

    &.ant-dropdown-menu-item-selected {
      color: ${colors.orange};
    }
  }
  }
 
 
`

export default GlobalStyles

export const Wrapper = styled.div`
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  padding: 0 8px;
`
