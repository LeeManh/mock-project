import { Link } from 'react-router-dom'

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
import routePaths from 'constants/routePaths'
import type { Product } from 'types/product.type'
import { formatCurrency, getPriceAfterSale, formatNumberToSocialStyle, getImageUrl, genarateNameId } from 'utils/utils'
interface Props {
  type?: 'default' | 'details'
  product: Product
}

const ProductCard = ({ type = 'default', product }: Props) => {
  const isHaveSale = Boolean(product.is_sale)
  const priceAfterSale = formatCurrency(
    isHaveSale ? getPriceAfterSale(product.price, product.percent_sale) : product.price
  )
  const priceBeforeSale = isHaveSale && formatCurrency(product.price)
  const nameId = genarateNameId({ name: product.name, id: product.id })
  const images = JSON.parse(product.image)

  return (
    <Link to={`${routePaths.detailsProduct}/${nameId}`}>
      <Container>
        <ImageProductWrap>
          <ImageProduct src={getImageUrl(images[0])} alt='' />
          {isHaveSale && (
            <SalesTag>
              <SalesPercentTag>{product.percent_sale}%</SalesPercentTag>
              <span>Giảm</span>
            </SalesTag>
          )}
        </ImageProductWrap>
        <Content>
          <TitleProduct>{product.name}</TitleProduct>

          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            {isHaveSale && (
              <PriceBefore>
                <span className='currency'>₫</span>
                <span className='price'>{priceBeforeSale}</span>
              </PriceBefore>
            )}

            <PriceAfterSale>
              <span className='currency'>₫</span>
              <span className='price'>{priceAfterSale}</span>
            </PriceAfterSale>
          </div>

          {!!product.isFreeShip && <FreeShipIcon />}

          <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginTop: 'auto' }}>
            <Rate disabled defaultValue={product.rating} gap='1px' style={{ fontSize: '1.2rem' }} />
            <NumberSold>Đã bán {formatNumberToSocialStyle(product.numberSell)}</NumberSold>
          </div>
        </Content>
      </Container>
    </Link>
  )
}

export default ProductCard
