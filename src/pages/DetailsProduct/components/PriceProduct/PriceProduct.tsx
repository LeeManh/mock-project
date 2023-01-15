import { useMemo } from 'react'

import { ReactComponent as PriceIcon } from 'assets/svgs/price.svg'
import { formatCurrency } from 'utils/utils'
import {
  MoreInformation,
  MoreInformationLeft,
  PercentSaleTag,
  PriceAfterSale,
  PriceBeforeSale,
  PriceSection,
  PriceWrap
} from './PriceProduct.styled'

interface Props {
  priceBefore: number
  percentSale: number
}

const PriceProduct = ({ priceBefore, percentSale }: Props) => {
  const priceAfterSale = useMemo(() => priceBefore - (priceBefore * percentSale) / 100, [priceBefore, percentSale])

  return (
    <PriceSection>
      <PriceWrap>
        <PriceBeforeSale>₫{formatCurrency(priceBefore)}</PriceBeforeSale>
        <PriceAfterSale>₫{formatCurrency(priceAfterSale)}</PriceAfterSale>
        <PercentSaleTag>{percentSale}% giảm</PercentSaleTag>
      </PriceWrap>
      <MoreInformation>
        <PriceIcon />
        <MoreInformationLeft>
          <div className='text-orange'>Gì Cũng Rẻ</div>
          <div className='text-gray'>Giá tốt nhất so với các sản phẩm cùng loại trên Shopee!</div>
        </MoreInformationLeft>
      </MoreInformation>
    </PriceSection>
  )
}

export default PriceProduct
