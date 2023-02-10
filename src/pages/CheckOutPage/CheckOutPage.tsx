import styled from 'styled-components'
import { Wrapper } from 'globalStyle.styled'
import InforUser from './components/InforUser'
import ListProducts from './components/ListProducts'
import CheckOut from './components/CheckOut'

const Container = styled.div``

const CheckOutPage = () => {
  return (
    <Container>
      <Wrapper>
        <InforUser />
        <ListProducts />
        <CheckOut />
      </Wrapper>
    </Container>
  )
}

export default CheckOutPage
