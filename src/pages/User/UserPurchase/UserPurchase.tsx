import styled from 'styled-components'
import { TabsProps } from 'antd'
import { useQuery } from '@tanstack/react-query'
import { useNavigate, useLocation, createSearchParams } from 'react-router-dom'

import CustomTab from 'components/CustomTab'
import orderStaus from 'constants/orderStatus'
import useQueryConfig from 'hooks/useQueryConfig'
import orderApis from 'apis/order.api'
import { OrderStaus } from 'types/order.type'
import LoadingDots from 'components/LoadingDots/LoadingDots'
import EmptyOrder from '../components/EmptyOrder'
import ItemOrder from '../components/ItemOrder'
import * as S from './UserPurchase.styled'

const Container = styled.div``

const items: TabsProps['items'] = [
  {
    key: `${orderStaus.Confirmed}`,
    label: `Đã xác nhận`
  },
  {
    key: `${orderStaus.Delivering}`,
    label: `Đang vận chuyển`
  },
  {
    key: `${orderStaus.Received}`,
    label: `Đã nhận`
  },
  {
    key: `${orderStaus.Cancelled}`,
    label: `Đã hủy`
  }
]

const UserPurchase = () => {
  const queryConfig = useQueryConfig()
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const { data: dataListOrder, isLoading } = useQuery({
    queryKey: ['list-order', queryConfig.delivery_status],
    queryFn: () => orderApis.getListOrder({ delivery_status: queryConfig.delivery_status as OrderStaus }),
    keepPreviousData: true
  })

  const listOrder = dataListOrder?.data.data

  if (isLoading) return <LoadingDots />

  const isHaveOrder = listOrder?.length !== 0

  const onChangeTab = (key: string) => {
    navigate({
      pathname,
      search: createSearchParams({
        delivery_status: key
      }).toString()
    })
  }

  return (
    <Container>
      <CustomTab items={items} defaultActiveKey={`${orderStaus.Confirmed}`} onChange={onChangeTab} />

      {isHaveOrder ? (
        <S.ListOrder>
          {listOrder!.map((order) => (
            <ItemOrder key={order.id} order={order} />
          ))}
        </S.ListOrder>
      ) : (
        <EmptyOrder />
      )}
    </Container>
  )
}

export default UserPurchase
