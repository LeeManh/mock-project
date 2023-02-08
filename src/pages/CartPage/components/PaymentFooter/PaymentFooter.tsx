import Button from 'components/Button'
import CheckBox from 'components/CheckBox'
import { handleCheckAllCart, selectCart } from 'features/cart/cartSlice'
import { useAppDispatch, useAppSelector } from 'hooks/useApp'
import { formatCurrency, getPriceAfterSale } from 'utils/utils'
import { PaymentWrap, PriceTotal, RemoveAll, RightPayment } from './PaymentFooter.styled'

const PaymentFooter = () => {
  const dispatch = useAppDispatch()

  const { isCheckAll, numberChecked, listCart } = useAppSelector(selectCart)

  const totalPrice = listCart.reduce((sum, item) => {
    const price = item.checked
      ? item.product.is_sale
        ? getPriceAfterSale(item.product.price, item.product.percent_sale)
        : item.product.price
      : 0

    return sum + price
  }, 0)

  const totalBefore = listCart.reduce((sum, item) => {
    const price = item.checked ? item.product.price : 0

    return sum + price
  }, 0)

  const totalPriceSave = totalPrice - totalBefore

  return (
    <PaymentWrap>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <CheckBox
          styleContainer={{ marginRight: '2rem' }}
          label={`Chọn Tất Cả (${numberChecked})`}
          checked={isCheckAll}
          onChange={() => dispatch(handleCheckAllCart())}
        />
        <RemoveAll>Xóa Tất Cả</RemoveAll>
      </div>
      <RightPayment>
        <div>Tổng thanh toán ({numberChecked} Sản phẩm) :</div>
        <div style={{ textAlign: 'right' }}>
          <PriceTotal>₫{formatCurrency(totalPrice)}</PriceTotal>
          <div>
            <span style={{ marginRight: '1rem' }}>Tiết kiệm:</span>
            <span>₫{formatCurrency(totalPriceSave)}</span>
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
