import Button from 'components/Button'
import routePaths from 'constants/routePaths'
import React from 'react'
import { Link } from 'react-router-dom'
import { Container, FooterWrap, HeaderTitle, NumberItemCart } from './DropDownCart.styled'

interface Props {
  menu: React.ReactNode
  numberItemLeft: number
}

const DropDownCart = ({ menu, numberItemLeft }: Props) => {
  const contentStyle: React.CSSProperties = {
    borderRadius: '2px',
    boxShadow: 'none',
    padding: '0',
    minWidth: '40rem'
  }

  return (
    <Container>
      {numberItemLeft > 0 && <HeaderTitle>Sản phẩm mới thêm</HeaderTitle>}

      {React.cloneElement(menu as React.ReactElement, { style: contentStyle })}

      <FooterWrap>
        <NumberItemCart>{numberItemLeft > 0 && numberItemLeft + 'Thêm Hàng Vào Giỏ'} </NumberItemCart>
        <Link to={routePaths.cart}>
          <Button typeBtn='primary'>Xem giỏ hàng</Button>
        </Link>
      </FooterWrap>
    </Container>
  )
}

export default DropDownCart
