import CheckBox from 'components/CheckBox'
import InputNumber from 'components/InputNumber'
import colors from 'constants/colors'
import { PriceAfterSale, PriceBefore } from 'globalStyle.styled'
import { ActionsTabel, PriceTabel, ProductTabel, QuantityTabel, TotalTabel } from 'pages/CartPage/CartPage.styled'
import styled from 'styled-components'
import { Button } from 'antd'
import { Link } from 'react-router-dom'
import routePaths from 'constants/routePaths'

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 2rem 0;
  border-bottom: 1px solid ${colors['gray-light-2']};
`
const ImageProduct = styled.img`
  min-width: 8rem;
  max-width: 8rem;
  height: 8rem;
  flex-shrink: 0;
`
const TitleProduct = styled.div`
  max-height: 4.8rem;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
`

const ItemProductCart = () => {
  return (
    <Container>
      <CheckBox styleContainer={{ marginRight: '2rem' }} />

      <ProductTabel style={{ display: 'flex', gap: '1rem' }}>
        <Link to={`${routePaths.detailsProduct}/1`}>
          <ImageProduct src='https://cf.shopee.vn/file/7f0400781460dc2e5518d377510a4d61_tn' alt='' />
        </Link>
        <Link to={`${routePaths.detailsProduct}/1`}>
          <TitleProduct>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim aliquam excepturi voluptatibus harum illum
            dolorum quis consequuntur iusto eius ratione dicta perferendis porro assumenda, animi est. Repellat incidunt
            nam reiciendis.
          </TitleProduct>
        </Link>
      </ProductTabel>
      <PriceTabel>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px' }}>
          <PriceBefore>
            <span className='currency'>₫</span>
            <span className='price'>360.000</span>
          </PriceBefore>
          <PriceAfterSale fontSizePrice='1.4rem' style={{ color: `${colors.black}` }}>
            <span className='currency'>₫</span>
            <span className='price'>360.000</span>
          </PriceAfterSale>
        </div>
      </PriceTabel>
      <QuantityTabel>
        <InputNumber
          haveOnBlur
          styleContainer={{ maxWidth: '8rem', display: 'inline-block' }}
          maxValue='1997'
          value='1'
        />
      </QuantityTabel>
      <TotalTabel>₫360.000</TotalTabel>
      <ActionsTabel>
        <Button type='text'>Xóa</Button>
      </ActionsTabel>
    </Container>
  )
}

export default ItemProductCart
