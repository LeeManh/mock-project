import {
  Container,
  Content,
  Currency,
  FooterProduct,
  FreeShipIcon,
  ImageProduct,
  ImageProductWrap,
  NumberSold,
  PriceProduct,
  PriceProductWrap,
  SalesPercentTag,
  SalesTag,
  TitleProduct
} from './ProductCard.styled'

const ProductCard = () => {
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

        <div>
          <FreeShipIcon />
        </div>

        <FooterProduct>
          <PriceProductWrap>
            <Currency>₫</Currency>
            <PriceProduct>360.000</PriceProduct>
          </PriceProductWrap>
          <NumberSold>Đã bán 6</NumberSold>
        </FooterProduct>
      </Content>
    </Container>
  )
}

export default ProductCard
