import { useEffect, useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Button } from 'antd'
import { Link } from 'react-router-dom'

import CheckBox from 'components/CheckBox'
import InputNumber from 'components/InputNumber'
import colors from 'constants/colors'
import { PriceAfterSale, PriceBefore } from 'globalStyle.styled'
import { ActionsTabel, PriceTabel, ProductTabel, QuantityTabel, TotalTabel } from '../Table/Table.styled'
import routePaths from 'constants/routePaths'
import { formatCurrency, genarateNameId, getImageUrl, getPriceAfterSale } from 'utils/utils'
import { Container, ImageProduct, TitleProduct } from './ItemProductCart.styled'
import { useAppDispatch } from 'hooks/useApp'
import { toggleCheckItemCart } from 'features/cart/cartSlice'
import cartApis from 'apis/cart.api'
import type { ExtraCartItem } from 'types/cart.type'

interface Props {
  item: ExtraCartItem
  index: number
}

const ItemProductCart = ({ item, index }: Props) => {
  const dispatch = useAppDispatch()
  const queryClient = useQueryClient()
  const nameId = genarateNameId({ name: item.product.name, id: item.product.id })

  const images = JSON.parse(item.product.image)
  const image = images ? getImageUrl(images[0]) : ''

  const priceAfterSale = Boolean(item.product.is_sale)
    ? getPriceAfterSale(item.product.price, item.product.percent_sale)
    : item.product.price

  const total = priceAfterSale * item.quantity

  const [quantity, setQuantity] = useState(String(item.quantity))

  const changeQuanityMutation = useMutation({
    onSuccess: () => {
      return queryClient.invalidateQueries({ queryKey: ['list-cart'] })
    },
    mutationFn: ({ id, quantity }: { id: number; quantity: string }) => cartApis.updateQuantity(id, quantity)
  })

  const deleteItemCartMutation = useMutation({
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['list-cart'] })
    },
    mutationFn: () => cartApis.deleteItemCart(item.id)
  })

  useEffect(() => {
    setQuantity(String(item.quantity))
  }, [item.quantity])

  return (
    <Container>
      <CheckBox
        styleContainer={{ marginRight: '2rem' }}
        checked={item.checked}
        onChange={() => dispatch(toggleCheckItemCart(index))}
      />

      <ProductTabel>
        <Link to={`${routePaths.detailsProduct}/${nameId}`}>
          <ImageProduct src={image} alt={item.product.name} />
        </Link>
        <div>
          <Link to={`${routePaths.detailsProduct}/${nameId})}`}>
            <TitleProduct>{item.product.name}</TitleProduct>
          </Link>

          {item?.color && (
            <div style={{ textTransform: 'capitalize', marginTop: '0.3rem' }}>M??u s???c : {item.color}</div>
          )}
          {item?.size && <div style={{ marginTop: '0.3rem' }}>Size : {item.size}</div>}
        </div>
      </ProductTabel>
      <PriceTabel>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px' }}>
          {Boolean(item.product.is_sale) && (
            <PriceBefore>
              <span className='currency'>???</span>
              <span className='price'>{formatCurrency(item.product.price)}</span>
            </PriceBefore>
          )}

          <PriceAfterSale fontSizePrice='1.4rem' style={{ color: `${colors.black}` }}>
            <span className='currency'>???</span>
            <span className='price'>{formatCurrency(priceAfterSale)}</span>
          </PriceAfterSale>
        </div>
      </PriceTabel>
      <QuantityTabel>
        <InputNumber
          style={{ textAlign: 'center', height: '3.2rem' }}
          styleContainer={{ maxWidth: '8rem', display: 'inline-block' }}
          maxValue={String(item.product.quantity)}
          value={String(quantity)}
          onChange={(e) => {
            setQuantity(e.target.value)
          }}
          allowStartWithZezo={false}
          onBlur={(e) => {
            if (!e.target.value) {
              e.target.value = '1'
              setQuantity('1')
            }
            changeQuanityMutation.mutate({ id: item.id, quantity: e.target.value })
          }}
        />
      </QuantityTabel>
      <TotalTabel>???{formatCurrency(total)}</TotalTabel>
      <ActionsTabel>
        <Button type='text' onClick={() => deleteItemCartMutation.mutate()}>
          X??a
        </Button>
      </ActionsTabel>
    </Container>
  )
}

export default ItemProductCart
