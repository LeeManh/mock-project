import * as S from './ListProducts.styled'
import ItemProduct from '../ItemProduct'
import { useAppSelector } from 'hooks/useApp'
import { selectCart } from 'features/cart/cartSlice'

export default function ListProducts() {
  const { listCart } = useAppSelector(selectCart)

  const listItemCartChecked = listCart.filter((item) => item.checked)

  return (
    <S.Container>
      <S.Header>
        <S.TitleHeader>Sản phẩm</S.TitleHeader>
        <S.TitlePrice>Đơn giá</S.TitlePrice>
        <S.TitleQuantity>Số lượng</S.TitleQuantity>
        <S.TitleTotalPrice>Thành tiền</S.TitleTotalPrice>
      </S.Header>

      <S.Content>
        {listItemCartChecked.map((item) => (
          <ItemProduct item={item} key={item.id} />
        ))}
      </S.Content>
    </S.Container>
  )
}
