import ProductCard from 'components/ProductCard'
import breakPonits from 'constants/breakPoints'
import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
  margin-top: 2rem;

  @media screen and (max-width: ${breakPonits.lg}) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media screen and (max-width: ${breakPonits.md}) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: ${breakPonits.sm}) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const ListProduct = () => {
  return (
    <Container>
      {Array(20)
        .fill(null)
        .map((_, index) => (
          <ProductCard key={index} />
        ))}
    </Container>
  )
}

export default ListProduct
