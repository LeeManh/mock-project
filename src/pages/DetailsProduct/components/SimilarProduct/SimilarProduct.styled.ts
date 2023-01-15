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
