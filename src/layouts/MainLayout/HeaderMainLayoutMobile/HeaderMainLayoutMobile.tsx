import { Avatar } from 'antd'
import InputSearch from 'components/InputSearch'
import breakPonits from 'constants/breakPoints'
import { Wrapper } from 'globalStyle.styled'
import styled from 'styled-components'
import { CartIcon } from '../HeaderMainLayout/HeaderMainLayout.styled'
import { Link } from 'react-router-dom'
import routePaths from 'constants/routePaths'

const Container = styled.div`
  background: linear-gradient(-180deg, #f53d2d, #f63);
  height: 6.5rem;
  display: none;

  @media screen and (max-width: ${breakPonits.md}) {
    display: block;
  }
`
const Wrap = styled(Wrapper)`
  display: flex;
  align-items: center;
  gap: 1rem;
`

const HeaderMainLayoutMobile = () => {
  return (
    <Container>
      <Wrap>
        <InputSearch placeholder='Tìm sản phẩm, thương hiệu, và tên shop' styleContainer={{ flex: 1 }} />
        <Link to={routePaths.cart}>
          <CartIcon />
        </Link>
        <Link to={`${routePaths.user}/${routePaths.userAccount}/${routePaths.userProfile}`}>
          <Avatar src='https://cf.shopee.vn/file/2d7d51ffc7af8cdc00d086c882d5e020_tn' alt='' size={30} />
        </Link>
      </Wrap>
    </Container>
  )
}

export default HeaderMainLayoutMobile
