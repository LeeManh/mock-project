import { useState } from 'react'
import { toast } from 'react-toastify'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'

import * as S from './CheckOut.styled'
import { TitleSection } from '../../CheckOutPage.styled'
import { Divider } from 'antd'
import { useAppSelector } from 'hooks/useApp'
import { selectCart } from 'features/cart/cartSlice'
import { formatCurrency, getFinalPrice } from 'utils/utils'
import orderApis, { BodyAddOrder } from 'apis/order.api'
import { selectInforCheckout } from 'features/checkout/checkoutSlice'
import CustomModal from 'components/CustomModal'
import { ModalButton, ModalFooter } from 'components/CustomModal/CustomModal.styled'
import routePaths from 'constants/routePaths'

const priceShip = 20000

const CheckOut = () => {
  const { listItemChecked } = useAppSelector(selectCart)
  const inforCheckout = useAppSelector(selectInforCheckout)
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  const total = listItemChecked.reduce((sum, item) => {
    return sum + getFinalPrice(item.product.price, item.product.percent_sale, item.product.is_sale) * item.quantity
  }, 0)
  const listIsItemChecked = listItemChecked.map((item) => item.id)
  const totalFinal = total + priceShip

  const checkoutMutation = useMutation({
    onSuccess: () => {
      queryClient.invalidateQueries(['list-cart'])
      navigate(routePaths.home)
      toast.success('Bạn đã đặt hàng thành công 🎉.', { autoClose: 1000 })
    },
    mutationFn: (body: BodyAddOrder) => orderApis.addOrder(body)
  })

  const [isModalOpen, setIsModalOpen] = useState(false)

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleOk = () => {
    setIsModalOpen(false)
  }

  const handleCheckout = () => {
    const isLackOfInfor = Object.values(inforCheckout).some((val) => !val)

    if (isLackOfInfor) {
      return showModal()
    }

    const stringListIsItemChecked = JSON.stringify(listIsItemChecked).slice(1, -1)

    checkoutMutation.mutate({
      name: inforCheckout.name,
      phone: inforCheckout.phone,
      address: inforCheckout.address,
      total_money: totalFinal,
      id_cart: stringListIsItemChecked
    })
  }

  return (
    <>
      <S.Container>
        <TitleSection>Thanh toán</TitleSection>
        <Divider />
        <S.InforPrice>
          <div></div>
          <S.LabelPrice>Tổng tiền hàng</S.LabelPrice>
          <S.PriceText>₫{formatCurrency(total)}</S.PriceText>

          <div></div>
          <S.LabelPrice>Phí vận chuyển</S.LabelPrice>
          <S.PriceText>₫{formatCurrency(priceShip)}</S.PriceText>

          <div></div>
          <S.LabelPrice>Tổng thanh toán:</S.LabelPrice>
          <S.TotalPrice>₫{formatCurrency(totalFinal)}</S.TotalPrice>
        </S.InforPrice>
        <Divider />

        <S.FooterCheckOut>
          <S.FooterRules>
            Nhấn "Đặt hàng" đồng nghĩa với việc bạn đồng ý tuân theo
            <S.LinkRules>Điều khoản Shopee</S.LinkRules>
          </S.FooterRules>
          <S.ButtonCheckOut
            typeBtn='primary'
            onClick={handleCheckout}
            isLoading={checkoutMutation.isLoading}
            disabled={checkoutMutation.isLoading}
          >
            Đặt hàng
          </S.ButtonCheckOut>
        </S.FooterCheckOut>
      </S.Container>

      <CustomModal
        open={isModalOpen}
        closable={false}
        footer={
          <ModalFooter>
            <ModalButton typeBtn='primary' onClick={handleOk} style={{ textTransform: 'capitalize' }}>
              Ok
            </ModalButton>
          </ModalFooter>
        }
      >
        <div>Bạn vẫn chưa điền thông tin người nhận.</div>
      </CustomModal>
    </>
  )
}

export default CheckOut
