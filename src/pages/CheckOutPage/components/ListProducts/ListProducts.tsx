import * as S from './ListProducts.styled'
import ItemProduct from '../ItemProduct'
import { useAppSelector } from 'hooks/useApp'
import { selectInforCheckout } from 'features/checkout/checkoutSlice'
import type { ExtraCartItem } from 'types/cart.type'

export default function ListProducts() {
  const { listCheckout } = useAppSelector(selectInforCheckout)

  return (
    <S.Container>
      <S.Header>
        <S.TitleHeader>Sản phẩm</S.TitleHeader>
        <S.TitlePrice>Đơn giá</S.TitlePrice>
        <S.TitleQuantity>Số lượng</S.TitleQuantity>
        <S.TitleTotalPrice>Thành tiền</S.TitleTotalPrice>
      </S.Header>

      <S.Content>
        {listCheckout.map((item: ExtraCartItem) => (
          <ItemProduct item={item} key={item.id} />
        ))}
      </S.Content>
    </S.Container>
  )
}
