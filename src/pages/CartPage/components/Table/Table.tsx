import CheckBox from 'components/CheckBox'
import {
  ActionsTabel,
  BodyTabel,
  Container,
  HeaderTabel,
  PriceTabel,
  ProductTabel,
  QuantityTabel,
  TotalTabel
} from './Table.styled'
import ItemProductCart from '../ItemProductCart'
import { useAppDispatch, useAppSelector } from 'hooks/useApp'
import { handleCheckAllCart, selectCart } from 'features/cart/cartSlice'

const Table = () => {
  const dispatch = useAppDispatch()

  const { isCheckAll, listCart } = useAppSelector(selectCart)

  return (
    <Container>
      <HeaderTabel>
        <CheckBox
          styleContainer={{ marginRight: '2rem' }}
          checked={isCheckAll}
          onChange={() => dispatch(handleCheckAllCart())}
        />

        <ProductTabel>Sản Phẩm</ProductTabel>
        <PriceTabel>Đơn Giá</PriceTabel>
        <QuantityTabel>Số Lượng</QuantityTabel>
        <TotalTabel>Số Tiền</TotalTabel>
        <ActionsTabel>Thao Tác</ActionsTabel>
      </HeaderTabel>

      <BodyTabel>
        {listCart.map((item, index) => (
          <ItemProductCart key={item.id} item={item} index={index} />
        ))}
      </BodyTabel>
    </Container>
  )
}

export default Table
