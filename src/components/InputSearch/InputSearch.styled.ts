import styled, { css } from 'styled-components'

import type { Props } from './InputSearch'
import { ReactComponent as SearchIconSvg } from 'assets/svgs/search-icon.svg'
import colors from 'constants/colors'
import breakPonits from 'constants/breakPoints'

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: ${colors.white};
  border-radius: 2px;
  overflow: hidden;
  height: 4rem;
  max-width: 84rem;
  width: 100%;
  padding-right: 3px;
  box-shadow: 0 0.125rem 0.25rem rgb(0 0 0 / 9%);

  ${(props: { typeInput: Props['typeInput'] }) => {
    switch (props.typeInput) {
      case 'default':
        return css``
      case 'primary':
        return css`
          padding: 0;
          border: 2px solid ${colors['orange-light']};
        `
    }
  }}

  @media screen and (max-width: ${breakPonits.md}) {
    height: 3.4rem;
  }
`

export const Input = styled.input`
  flex: 1;
  border: none;
  outline: none;
  height: 100%;
  padding: 0 1.5rem;
  &:placeholder-shown {
    text-overflow: ellipsis;
  }

  @media screen and (max-width: ${breakPonits.md}) {
    padding: 0;
  }
`
export const ButtonSearch = styled.button`
  border: none;
  outline: none;
  min-width: 6rem;
  max-width: 19rem;
  height: calc(100% - 0.6rem);
  background-color: ${colors['orange-light']};
  border-radius: 2px;
  cursor: pointer;
  display: grid;
  place-items: center;
  user-select: none;

  ${(props: { typeInput: Props['typeInput'] }) => {
    switch (props.typeInput) {
      case 'default':
        return css``
      case 'primary':
        return css`
          height: 100%;
          border-radius: 0;
        `
    }
  }}

  @media screen and (max-width: ${breakPonits.md}) {
    background-color: transparent;
    order: -1;
    min-width: min-content;
    min-height: min-content;
    padding: 0 1rem;
  }
`
export const SearchIcon = styled(SearchIconSvg)`
  fill: white;
  width: 1.4rem;
  height: 1.4rem;

  @media screen and (max-width: ${breakPonits.md}) {
    fill: ${colors['gray-text']};
  }
`
