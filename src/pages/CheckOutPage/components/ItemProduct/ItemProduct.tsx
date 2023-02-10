import * as S from './ItemProduct.styled'
import { Link } from 'react-router-dom'
import type { ExtraCartItem } from 'types/cart.type'
import { formatCurrency, getPriceAfterSale, getImageUrl } from 'utils/utils'

interface Props {
  item: ExtraCartItem
}

const ItemProduct = ({ item }: Props) => {
  const product = item.product

  const images = JSON.parse(product.image)

  const price = product.is_sale ? getPriceAfterSale(product.price, product.percent_sale) : product.price
  const total = price * item.quantity
  const arrType = [item.size, item.color].filter((val) => val)
  const stringType = arrType.join(' , ')

  return (
    <S.Container>
      <S.InforProduct>
        <Link to='/'>
          <S.ImageProduct src={getImageUrl(images[0])} alt='' />
        </Link>
        {arrType.length > 0 && <S.NameProduct>{product.name}</S.NameProduct>}

        <S.TypeProduct>Loại: {stringType}</S.TypeProduct>
      </S.InforProduct>
      <S.Price>₫{formatCurrency(price)}</S.Price>
      <S.Quantity>{item.quantity}</S.Quantity>
      <S.Total>₫{formatCurrency(total)}</S.Total>
    </S.Container>
  )
}

export default ItemProduct
