import styled from 'styled-components'

import { Wrapper } from 'globalStyle.styled'
import InforUser from './components/InforUser'
import ListProducts from './components/ListProducts'
import CheckOut from './components/CheckOut'
import CustomHelmet from 'components/CustomHelmet'

const Container = styled.div``

const CheckOutPage = () => {
  return (
    <>
      <CustomHelmet>
        <title>Shopee Việt Nam | Mua và Bán Trên Ứng Dụng Di Động Hoặc Website</title>
      </CustomHelmet>
      <Container>
        <Wrapper>
          <InforUser />
          <ListProducts />
          <CheckOut />
        </Wrapper>
      </Container>
    </>
  )
}

export default CheckOutPage
