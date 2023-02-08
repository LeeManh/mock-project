import type { CartItem } from 'types/cart.type'
import { formatCurrency, getImageUrl, getPriceAfterSale } from 'utils/utils'
import { Container, Image, NameProduct, Price } from './ItemDropDownCart.styled'

interface Props {
  item: CartItem
}

const ItemDropDownCart = ({ item }: Props) => {
  const images = JSON.parse(item.product.image)
  const priceAfterSale = formatCurrency(
    item.product.is_sale ? getPriceAfterSale(item.product.price, item.product.percent_sale) : item.product.price
  )

  return (
    <Container>
      <Image src={getImageUrl(images[0])} alt={item.product.name} />
      <NameProduct>{item.product.name}</NameProduct>
      <Price>₫{priceAfterSale}</Price>
    </Container>
  )
}

export default ItemDropDownCart
