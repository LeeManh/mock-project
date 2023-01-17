import Rate from 'components/Rate'
import { PriceAfterSale, PriceBefore } from 'globalStyle.styled'
import {
  Container,
  Content,
  FreeShipIcon,
  ImageProduct,
  ImageProductWrap,
  NumberSold,
  SalesPercentTag,
  SalesTag,
  TitleProduct
} from './ProductCard.styled'

interface Props {
  type?: 'default' | 'details'
}

const ProductCard = ({ type = 'default' }: Props) => {
  return (
    <Container>
      <ImageProductWrap>
        <ImageProduct src='https://cf.shopee.vn/file/3f7fbc266959a8c2bb4c056073555957_tn' alt='' />
        <SalesTag>
          <SalesPercentTag>20%</SalesPercentTag>
          <span>Giảm</span>
        </SalesTag>
      </ImageProductWrap>
      <Content>
        <TitleProduct>
          [Giá hủy diệt] Áo khoác nam mùa đông lót lông cừu, vải nhung tăm [Giá hủy diệt] Áo khoác nam mùa đông lót lông
          cừu, vải nhung tăm
        </TitleProduct>

        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <PriceBefore>
            <span className='currency'>₫</span>
            <span className='price'>360.000</span>
          </PriceBefore>
          <PriceAfterSale>
            <span className='currency'>₫</span>
            <span className='price'>360.000</span>
          </PriceAfterSale>
        </div>

        <FreeShipIcon />

        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <Rate disabled defaultValue={4} gap='1px' style={{ fontSize: '1.2rem' }} />
          <NumberSold>Đã bán 5,1k</NumberSold>
        </div>
      </Content>
    </Container>
  )
}

export default ProductCard
