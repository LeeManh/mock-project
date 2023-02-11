import { useNavigate } from 'react-router-dom'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'

import Button from 'components/Button'
import CheckBox from 'components/CheckBox'
import CustomModal from 'components/CustomModal'
import { ModalButton, ModalFooter } from 'components/CustomModal/CustomModal.styled'
import { handleCheckAllCart, selectCart } from 'features/cart/cartSlice'
import { useAppDispatch, useAppSelector } from 'hooks/useApp'
import { formatCurrency, getPriceAfterSale } from 'utils/utils'
import { PaymentWrap, PriceTotal, RemoveAll, RightPayment } from './PaymentFooter.styled'
import cartApis from 'apis/cart.api'
import routePaths from 'constants/routePaths'
import { updateInforCheckout } from 'features/checkout/checkoutSlice'
import { selectAuth } from 'features/auth/authSlice'

const PaymentFooter = () => {
  const dispatch = useAppDispatch()
  const queryClient = useQueryClient()
  const navigate = useNavigate()
  const { user } = useAppSelector(selectAuth)

  const { isCheckAll, numberChecked, listCart, listItemChecked } = useAppSelector(selectCart)

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
  const listIdItemCartChecked = listItemChecked.reduce((arr: number[], item) => {
    return item.checked ? [...arr, item.id] : arr
  }, [])

  const [isModalOpen, setIsModalOpen] = useState(false)
  const showModal = () => {
    setIsModalOpen(true)
  }

  const deleteItemsCartMutation = useMutation({
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['list-cart'] })
    },
    mutationFn: (idMutilItemCart: string) => cartApis.deleteItemsCart(idMutilItemCart)
  })

  const handleOk = () => {
    const idMutilItemCart = JSON.stringify(listIdItemCartChecked).slice(1, -1)

    deleteItemsCartMutation.mutate(idMutilItemCart)

    setIsModalOpen(false)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }
  const handleBuy = () => {
    if (numberChecked === 0) return

    dispatch(
      updateInforCheckout({
        name: user?.name || '',
        address: user?.address || '',
        phone: user?.phone || '',
        listCheckout: listItemChecked
      })
    )
    navigate(routePaths.checkout)
  }

  return (
    <PaymentWrap>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <CheckBox
          styleContainer={{ marginRight: '2rem' }}
          label={`Chọn Tất Cả (${numberChecked})`}
          checked={isCheckAll}
          onChange={() => dispatch(handleCheckAllCart())}
        />
        <RemoveAll onClick={showModal}>Xóa Tất Cả</RemoveAll>
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
        <Button
          typeBtn='primary'
          style={{ width: '100%', maxWidth: '20rem' }}
          disabled={numberChecked === 0}
          onClick={handleBuy}
        >
          Mua hàng
        </Button>
      </RightPayment>

      <CustomModal
        title={`Bạn có muốn bỏ ${listIdItemCartChecked.length} sản phẩm không`}
        open={isModalOpen}
        closable={false}
        footer={
          <ModalFooter>
            <ModalButton typeBtn='primary' onClick={handleCancel}>
              Trở lại
            </ModalButton>
            <ModalButton typeBtn='default' onClick={handleOk}>
              Có
            </ModalButton>
          </ModalFooter>
        }
      />
    </PaymentWrap>
  )
}

export default PaymentFooter
