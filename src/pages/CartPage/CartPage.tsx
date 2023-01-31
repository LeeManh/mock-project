import Button from 'components/Button'
import CheckBox from 'components/CheckBox'
import { Wrapper } from 'globalStyle.styled'
import {
  ActionsTabel,
  BodyTabel,
  Container,
  HeaderTabel,
  PaymentWrap,
  PriceTabel,
  PriceTotal,
  ProductTabel,
  QuantityTabel,
  RemoveAll,
  RightPayment,
  TotalTabel
} from './CartPage.styled'
import ItemProductCart from './components/ItemProductCart'

const CartPage = () => {
  return (
    <Container>
      <Wrapper>
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

        <PaymentWrap>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <CheckBox styleContainer={{ marginRight: '2rem' }} label='Chọn Tất Cả (4)' />
            <RemoveAll>Xóa Tất Cả</RemoveAll>
          </div>
          <RightPayment>
            <div>Tổng thanh toán (0 Sản phẩm) :</div>
            <div style={{ textAlign: 'right' }}>
              <PriceTotal>₫1.845.000</PriceTotal>
              <div>
                <span style={{ marginRight: '1rem' }}>Tiết kiệm:</span>
                <span>₫1.000</span>
              </div>
            </div>
            <Button typeBtn='primary' style={{ width: '100%', maxWidth: '20rem' }}>
              Mua hàng
            </Button>
          </RightPayment>
        </PaymentWrap>
      </Wrapper>
    </Container>
  )
}

export default CartPage
