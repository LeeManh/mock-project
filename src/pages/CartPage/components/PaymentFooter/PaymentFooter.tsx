import Button from 'components/Button'
import CheckBox from 'components/CheckBox'
import { PaymentWrap, PriceTotal, RemoveAll, RightPayment } from './PaymentFooter.styled'

const PaymentFooter = () => {
  return (
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
  )
}

export default PaymentFooter
