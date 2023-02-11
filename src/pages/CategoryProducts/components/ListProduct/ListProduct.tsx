import ProductCard from 'components/ProductCard'
import breakPonits from 'constants/breakPoints'
import styled from 'styled-components'
import { Product } from 'types/product.type'

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
interface Props {
  listProducts: Product[]
}

const ListProduct = ({ listProducts }: Props) => {
  return (
    <Container>
      {listProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Container>
  )
}

export default ListProduct
