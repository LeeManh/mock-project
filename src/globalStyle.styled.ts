import colors from 'constants/colors'
import breakPonits from 'constants/breakPoints'
import styled, { createGlobalStyle, css } from 'styled-components'

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
  a {
    color: inherit;
    text-decoration: none;
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

export const ContainerGlobal = styled.div`
  margin: 14rem auto 0;

  @media screen and (max-width: ${breakPonits.md}) {
    margin: 2rem auto;
  }
`

export const Wrapper = styled.div`
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  padding: 0 2rem;
`

export const SeeAllLink = styled.div`
  cursor: pointer;
  color: ${colors.orange};
  display: flex;
  align-items: center;
  gap: 5px;

  svg {
    font-size: 1.3rem;
  }
`
export const PriceAfterSale = styled.div`
  display: flex;
  align-items: flex-end;
  white-space: nowrap;
  color: ${colors.orange};
  font-weight: 500;

  .currency {
    font-size: 1.2rem;
  }
  .price {
    ${(props: { fontSizePrice?: string }) =>
      props.fontSizePrice
        ? css`
            font-size: props.fontSizePrice;
          `
        : css`
            font-size: 1.6rem;
          `}
  }
`
export const PriceBefore = styled.div`
  display: flex;
  align-items: flex-end;
  white-space: nowrap;
  font-size: 1.4rem;
  text-decoration: line-through;
  color: ${colors['gray-light-3']};

  .currency {
    font-size: 1.2rem;
  }
  .price {
    font-size: 1.4rem;
  }
`
export const ErrorMessage = styled.div`
  color: ${colors.orange};
  font-size: 1.3rem;
  min-height: 1.5rem;
  margin-top: 0.5rem;
  user-select: none;
`
