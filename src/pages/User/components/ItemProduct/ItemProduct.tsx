import { Link } from 'react-router-dom'

import { PriceBefore, PriceAfterSale } from 'globalStyle.styled'
import routePaths from 'constants/routePaths'
import * as S from './ItemProduct.styled'
import type { ItemProductOrder } from 'types/order.type'
import { formatCurrency, getFinalPrice, getImageUrl, genarateNameId } from 'utils/utils'

interface Props {
  productOrder: ItemProductOrder
}

const ItemProduct = ({ productOrder }: Props) => {
  const product = productOrder.product

  const images = JSON.parse(product.image)
  const priceFinal = getFinalPrice(product.price, product.percent_sale, product.is_sale)
  const nameId = genarateNameId({ name: product.name, id: product.id })
  const arrType = [productOrder.size, productOrder.color].filter((val) => val)
  const stringType = arrType.join(' , ')

  return (
    <S.Container>
      <Link to={`${routePaths.detailsProduct}/${nameId}`}>
        <S.ImageProduct src={getImageUrl(images[0])} alt={product.name} />
      </Link>

      <div>
        <Link to={`${routePaths.detailsProduct}/${nameId}`}>
          <S.Name>{product.name}</S.Name>
        </Link>

        <div style={{ marginTop: '1rem' }}>
          {arrType.length > 0 && <S.TypeProduct>Phân loại hàng: {stringType}</S.TypeProduct>}

          <div>x {productOrder.quantity}</div>

          <S.PriceSection>
            {!!product.is_sale && (
              <PriceBefore>
                <span className='currency'>₫</span>
                <span className='price'>{formatCurrency(product.price)}</span>
              </PriceBefore>
            )}

            <PriceAfterSale>
              <span className='currency'>₫</span>
              <span className='price'>{formatCurrency(priceFinal)}</span>
            </PriceAfterSale>
          </S.PriceSection>
        </div>
      </div>
    </S.Container>
  )
}

export default ItemProduct
