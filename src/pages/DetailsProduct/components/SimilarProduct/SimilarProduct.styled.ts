import breakPonits from 'constants/breakPoints'
import colors from 'constants/colors'
import styled from 'styled-components'

export const SimilarProductsWrap = styled.div`
  margin-top: 4rem;
`
export const ListSimilarProduct = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1rem;
  margin-top: 2rem;

  @media screen and (max-width: ${breakPonits.xl}) {
    grid-template-columns: repeat(5, 1fr);
  }
  @media screen and (max-width: ${breakPonits.md}) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media screen and (max-width: ${breakPonits.sm}) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: ${breakPonits.xs}) {
    grid-template-columns: repeat(2, 1fr);
  }
`
export const Title = styled.div`
  font-size: 1.6rem;
  color: ${colors['gray-text']};
  text-transform: uppercase;
`
export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
