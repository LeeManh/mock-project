import colors from 'constants/colors'
import { PriceBefore, PriceAfterSale } from 'globalStyle.styled'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
  background-color: ${colors.white};
  padding: 2rem;
  border-radius: 2px;
  box-shadow: rgb(0 0 0 / 5%) 0px 1px 1px 0px;
`
const ImageProduct = styled.img`
  width: 8rem;
  height: 8rem;
  border: 1px solid ${colors['gray-light-2']};
`
const Title = styled.div``

const ItemPurchase = () => {
  return (
    <Container>
      <ImageProduct src='https://cf.shopee.vn/file/df8d4b6b3eb87ad4c5b35d43c1be2207_tn' alt='' />

      <div>
        <Title>
          Ghế Làm Việc Eames Nhựa Chân Gỗ Đan Sắt Dành Cho Học Sinh Để Văn Làm Việc Văn Phòng Gaming Ngồi Học Ngồi Máy
          Tính
        </Title>
        <div style={{ marginTop: '1rem' }}>
          <div>x1</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '1rem' }}>
            <PriceBefore>
              <span className='currency'>₫</span>
              <span className='price'>360.000</span>
            </PriceBefore>
            <PriceAfterSale>
              <span className='currency'>₫</span>
              <span className='price'>360.000</span>
            </PriceAfterSale>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default ItemPurchase
