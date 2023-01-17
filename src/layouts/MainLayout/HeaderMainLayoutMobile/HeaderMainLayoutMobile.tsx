import { Avatar } from 'antd'
import InputSearch from 'components/InputSearch'
import { Wrapper } from 'globalStyle.styled'
import styled from 'styled-components'
import { CartIcon } from '../HeaderMainLayout/HeaderMainLayout.styled'

const Container = styled.div`
  background: linear-gradient(-180deg, #f53d2d, #f63);
  height: 6.5rem;
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
        <CartIcon />
        <Avatar src='https://cf.shopee.vn/file/2d7d51ffc7af8cdc00d086c882d5e020_tn' alt='' size={30} />
      </Wrap>
    </Container>
  )
}

export default HeaderMainLayoutMobile
