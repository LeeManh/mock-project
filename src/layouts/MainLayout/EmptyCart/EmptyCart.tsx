import images from 'assets/images'
import { Container } from './EmptyCart.styled'

const EmptyCart = () => {
  return (
    <Container>
      <img src={images.cart.cartEmpty} alt='cartEmpty' />
      <div>Chưa có sản phẩm</div>
    </Container>
  )
}

export default EmptyCart
