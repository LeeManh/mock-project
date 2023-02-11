import { useQuery } from '@tanstack/react-query'
import productApis from 'apis/product.api'
import ProductCard from 'components/ProductCard'
import breakPonits from 'constants/breakPoints'
import colors from 'constants/colors'
import { ContainerGlobal, Wrapper } from 'globalStyle.styled'
import styled from 'styled-components'

const Container = styled(ContainerGlobal)`
  padding-top: 2rem;
`
const Title = styled.div`
  text-align: center;
  font-size: 2rem;
  color: ${colors['gray-text']};
`
const ListTopProducts = styled.div`
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

const TopProducts = () => {
  const { data: dataListTopSellProduct } = useQuery({
    queryKey: ['list-top-sell-products'],
    queryFn: () => productApis.fetchListTopSellProducts(),
    keepPreviousData: true,
    staleTime: 5 * 60 * 1000
  })
  const listTopSellProduct = dataListTopSellProduct?.data.data

  console.log(listTopSellProduct)

  return (
    <Container>
      <Wrapper>
        <Title>Sản phẩm bán chạy</Title>
        <ListTopProducts>
          {listTopSellProduct &&
            listTopSellProduct.map((product) => <ProductCard key={product.id} product={product} />)}
        </ListTopProducts>
      </Wrapper>
    </Container>
  )
}

export default TopProducts
