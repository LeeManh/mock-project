import React from 'react'
import { Divider } from 'antd'
import { useMutation, useQueryClient } from '@tanstack/react-query'

import type { ItemOrder as OrderType } from 'types/order.type'
import * as S from './ItemOrder.styled'
import ItemProduct from '../ItemProduct'
import { formatCurrency } from 'utils/utils'
import useQueryConfig from 'hooks/useQueryConfig'
import orderApis from 'apis/order.api'
import { toast } from 'react-toastify'
import orderStaus from 'constants/orderStatus'

interface Props {
  order: OrderType
}

const ItemOrder = ({ order }: Props) => {
  const queryClient = useQueryClient()
  const queryConfig = useQueryConfig()

  const cancelOrderMutation = useMutation({
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['list-order', queryConfig.delivery_status] })
      toast.success('Hủy đơn hàng thành công', { autoClose: 1000 })
    },
    mutationFn: (id: number) => orderApis.cancelOrder(id)
  })
  const buyOrderAgainMutation = useMutation({
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['list-order', queryConfig.delivery_status] })
      toast.success('Mua lại đơn hàng thành công', { autoClose: 1000 })
    },
    mutationFn: (id: number) => orderApis.buyOrderAgain(id)
  })

  return (
    <S.ItemOrder>
      {order.product_order.map((productOrder) => (
        <React.Fragment key={productOrder.id}>
          <ItemProduct productOrder={productOrder} />
          <Divider style={{ margin: 0 }} />
        </React.Fragment>
      ))}

      <S.FooterItem>
        <S.WrapTotalMoney>
          <S.LabelTotalMoney>Thành tiền:</S.LabelTotalMoney>
          <S.TotalMoney>₫{formatCurrency(order.total_money)}</S.TotalMoney>
        </S.WrapTotalMoney>
        <S.ButtonsSection>
          {[orderStaus.Delivering, orderStaus.Confirmed].includes(order.delivery_status as any) && (
            <S.ButtonAction
              typeBtn='primary'
              onClick={() => cancelOrderMutation.mutate(+order.id)}
              isLoading={cancelOrderMutation.isLoading}
              disabled={cancelOrderMutation.isLoading}
            >
              Hủy Đơn Hàng
            </S.ButtonAction>
          )}
          {[orderStaus.Cancelled, orderStaus.Delivered].includes(order.delivery_status as any) && (
            <S.ButtonAction
              onClick={() => buyOrderAgainMutation.mutate(+order.id)}
              isLoading={buyOrderAgainMutation.isLoading}
              disabled={buyOrderAgainMutation.isLoading}
            >
              Mua lại
            </S.ButtonAction>
          )}
        </S.ButtonsSection>
      </S.FooterItem>
    </S.ItemOrder>
  )
}

export default ItemOrder
