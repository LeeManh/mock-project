import styled from 'styled-components'
import { Link } from 'react-router-dom'

import images from 'assets/images'
import Button from 'components/Button'
import colors from 'constants/colors'
import routePaths from 'constants/routePaths'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 30rem;
  gap: 2rem;
`
const ImageEmpty = styled.img`
  width: 10rem;
  height: 10rem;
`
const TextEmpty = styled.div`
  color: ${colors['gray-text']};
  font-weight: 600;
`

const EmptyCart = () => {
  return (
    <Container>
      <ImageEmpty src={images.cartEmpty} alt='' />
      <TextEmpty>Giỏ hàng của bạn còn trống</TextEmpty>

      <Button typeBtn='primary' style={{ minWidth: '16rem', textTransform: 'uppercase' }}>
        <Link to={routePaths.home}>Mua ngay</Link>
      </Button>
    </Container>
  )
}

export default EmptyCart
