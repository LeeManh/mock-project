import ProductCard from 'components/ProductCard'
import breakPonits from 'constants/breakPoints'
import colors from 'constants/colors'
import { ContainerGlobal, Wrapper } from 'globalStyle.styled'
import styled from 'styled-components'

const Container = styled(ContainerGlobal)``
const Title = styled.div`
  text-align: center;
  font-size: 2rem;
  color: ${colors['gray-text']};
`
const ListTopProducts = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1rem;
  margin-top: 3rem;

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
  return (
    <Container>
      <Wrapper>
        <Title>Tìm kiếm hàng đầu</Title>
        <ListTopProducts>
          {Array(12)
            .fill(null)
            .map((_, index) => (
              <ProductCard key={index} />
            ))}
        </ListTopProducts>
      </Wrapper>
    </Container>
  )
}

export default TopProducts
