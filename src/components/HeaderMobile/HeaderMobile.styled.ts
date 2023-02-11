import breakPonits from 'constants/breakPoints'
import colors from 'constants/colors'
import { Wrapper } from 'globalStyle.styled'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  height: 6.5rem;
  display: none;
  background-color: ${(props: { isInHome: boolean }) => (props.isInHome ? `${colors.orange}` : `${colors.white}`)};
  box-shadow: 0 0 6px 0 rgb(0 0 0 / 6%);
  position: sticky;
  top: 0;
  z-index: 9999;

  @media screen and (max-width: ${breakPonits.md}) {
    display: block;
  }
`
export const Wrap = styled(Wrapper)`
  display: flex;
  align-items: center;
  gap: 3rem;

  @media screen and (max-width: ${breakPonits.xs}) {
    gap: 2rem;
  }
`

export const LinkCart = styled(Link)`
  margin-left: auto;

  svg {
    color: ${(props: { isInHome: boolean }) => !props.isInHome && `${colors.black}`};
  }
`

export const ButtonBack = styled.div``

export const TitleHeader = styled.div`
  text-transform: capitalize;
  font-weight: bold;
`
