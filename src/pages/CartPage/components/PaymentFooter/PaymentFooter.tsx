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
import * as S from './PaymentFooter.styled'
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
    <S.PaymentWrap>
      <S.LeftPayment>
        <CheckBox
          styleContainer={{ marginRight: '2rem' }}
          label={`Ch???n T???t C??? (${numberChecked})`}
          checked={isCheckAll}
          onChange={() => dispatch(handleCheckAllCart())}
        />
        <S.RemoveAll onClick={showModal}>X??a T???t C???</S.RemoveAll>
      </S.LeftPayment>
      <S.RightPayment>
        <div>T???ng thanh to??n ({numberChecked} S???n ph???m) :</div>
        <div style={{ textAlign: 'right' }}>
          <S.PriceTotal>???{formatCurrency(totalPrice)}</S.PriceTotal>
          <div>
            <span style={{ marginRight: '1rem' }}>Ti???t ki???m:</span>
            <span>???{formatCurrency(totalPriceSave)}</span>
          </div>
        </div>
        <Button
          typeBtn='primary'
          style={{ width: '100%', maxWidth: '20rem' }}
          disabled={numberChecked === 0}
          onClick={handleBuy}
        >
          Mua h??ng
        </Button>
      </S.RightPayment>

      <CustomModal
        title={`B???n c?? mu???n b??? ${listIdItemCartChecked.length} s???n ph???m kh??ng`}
        open={isModalOpen}
        closable={false}
        footer={
          <ModalFooter>
            <ModalButton typeBtn='primary' onClick={handleCancel}>
              Tr??? l???i
            </ModalButton>
            <ModalButton typeBtn='default' onClick={handleOk}>
              C??
            </ModalButton>
          </ModalFooter>
        }
      />
    </S.PaymentWrap>
  )
}

export default PaymentFooter
