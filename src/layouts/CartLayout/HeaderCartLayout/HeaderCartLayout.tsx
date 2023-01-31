import NavbarHeader from 'components/NavbarHeader'
import InputSearch from 'components/InputSearch'
import colors from 'constants/colors'
import routePaths from 'constants/routePaths'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { ReactComponent as LogoShopee } from 'assets/svgs/logo-shopee.svg'
import { Wrapper } from 'globalStyle.styled'
import breakPonits from 'constants/breakPoints'
import useSearchProduct from 'hooks/useSearchProduct'

const NavbarHeaderBg = styled.header`
  background: linear-gradient(-180deg, #f53d2d, #f63);

  @media screen and (max-width: ${breakPonits.md}) {
    display: none;
  }
`
const MainHeader = styled.div`
  height: 8.5rem;
  background-color: ${colors.white};
  border-bottom: 1px solid ${colors['gray-light-2']};

  @media screen and (max-width: ${breakPonits.md}) {
    display: none;
  }
`
const HeaderMainWrap = styled(Wrapper)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const CartText = styled.div`
  color: ${colors.orange};
  font-size: 2rem;
  margin-left: 1.5rem;
  padding: 0.5rem 0 0.5rem 1.5rem;
  border-left: 1px solid ${colors.orange};
`

const HeaderCartLayout = () => {
  const { keyword, onChange, onSearch } = useSearchProduct()

  return (
    <>
      <NavbarHeaderBg>
        <NavbarHeader />
      </NavbarHeaderBg>
      <MainHeader>
        <HeaderMainWrap>
          <div style={{ display: 'flex', alignItems: 'end' }}>
            <Link to={routePaths.home} style={{ display: 'flex' }}>
              <LogoShopee fill={colors.orange} style={{ cursor: 'pointer', height: '5rem' }} />
            </Link>
            <CartText>Giỏ hàng</CartText>
          </div>

          <InputSearch
            placeholder='Tìm sản phẩm, thương hiệu, và tên shop'
            typeInput='primary'
            styleContainer={{ width: '50rem' }}
            value={keyword}
            onChange={onChange}
            onSearch={onSearch}
          />
        </HeaderMainWrap>
      </MainHeader>
    </>
  )
}

export default HeaderCartLayout
