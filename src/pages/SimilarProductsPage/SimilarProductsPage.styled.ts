import breakPonits from 'constants/breakPoints'
import colors from 'constants/colors'
import { ContainerGlobal } from 'globalStyle.styled'
import styled from 'styled-components'

export const Container = styled(ContainerGlobal)`
  padding-top: 2rem;
`
export const TitleWrap = styled.div`
  text-align: center;
  position: relative;
`
export const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  font-weight: 400;
  color: ${colors.white};
  background-color: ${colors.orange};
  text-transform: capitalize;
  display: inline-block;
  padding: 1.8rem 2rem;
  border-radius: 1rem;
`
export const LineThrough = styled.hr`
  position: absolute;
  width: 100%;
  border-top: 1px dotted rgba(0, 0, 0, 0.26);
  top: 50%;
  transform: translateY(-50%);
  z-index: -1;
`

export const ListProducts = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1rem;
  margin-top: 4rem;

  @media screen and (max-width: ${breakPonits.lg}) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media screen and (max-width: ${breakPonits.md}) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: ${breakPonits.sm}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: ${breakPonits.xs}) {
    grid-template-columns: repeat(1, 1fr);
  }
`
