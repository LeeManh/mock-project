import { Avatar } from 'antd'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
import { useQuery } from '@tanstack/react-query'

import InputSearch from 'components/InputSearch'
import { CartIcon } from 'layouts/MainLayout/HeaderMainLayout/HeaderMainLayout.styled'
import routePaths from 'constants/routePaths'
import * as S from './HeaderMobile.styled'
import { getImageUrl } from 'utils/utils'
import { useAppSelector } from 'hooks/useApp'
import { selectAuth } from 'features/auth/authSlice'
import colors from 'constants/colors'
import CustomBadge from 'components/CustomBadge'
import cartApis from 'apis/cart.api'

const HeaderMobile = () => {
  const { user, isAuthenticated } = useAppSelector(selectAuth)
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const currentRoute = pathname.split('/')?.[1]

  const isInHome = currentRoute === ''

  const avartar = user?.avatar ? getImageUrl(user.avatar) : ''

  const { data: dataListCart } = useQuery({
    queryKey: ['list-cart'],
    queryFn: () => cartApis.fetchListCart(),
    enabled: isAuthenticated
  })
  const listCart = dataListCart?.data.data

  return (
    <S.Container isInHome={isInHome}>
      <S.Wrap>
        {isInHome && <InputSearch placeholder='Tìm sản phẩm, thương hiệu, và tên shop' styleContainer={{ flex: 1 }} />}
        {!isInHome && (
          <>
            <S.ButtonBack onClick={() => navigate(-1)}>
              <FontAwesomeIcon icon={faArrowLeftLong} style={{ fontSize: '2rem', color: `${colors.orange}` }} />
            </S.ButtonBack>
            <S.TitleHeader>{currentRoute}</S.TitleHeader>
          </>
        )}
        <S.LinkCart to={routePaths.cart} isInHome={isInHome}>
          <CustomBadge count={listCart?.length || 0} overflowCount={99} offset={[2, 0]} size={'small'}>
            <CartIcon />
          </CustomBadge>
        </S.LinkCart>
        <Link to={`${routePaths.user}/${routePaths.userAccount}/${routePaths.userProfile}`}>
          <Avatar src={avartar} alt={user?.name} size={30} />
        </Link>
      </S.Wrap>
    </S.Container>
  )
}

export default HeaderMobile
