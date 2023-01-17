import ProductCard from 'components/ProductCard'
import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
  margin-top: 2rem;
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
