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

const Table = () => {
  return (
    <Container>
      <HeaderTabel>
        <CheckBox styleContainer={{ marginRight: '2rem' }} />

        <ProductTabel>Sản Phẩm</ProductTabel>
        <PriceTabel>Đơn Giá</PriceTabel>
        <QuantityTabel>Số Lượng</QuantityTabel>
        <TotalTabel>Số Tiền</TotalTabel>
        <ActionsTabel>Thao Tác</ActionsTabel>
      </HeaderTabel>

      <BodyTabel>
        <ItemProductCart />
        <ItemProductCart />
        <ItemProductCart />
        <ItemProductCart />
      </BodyTabel>
    </Container>
  )
}

export default Table
