import { Avatar } from 'antd'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'

import routePaths from 'constants/routePaths'
import colors from 'constants/colors'
import MenuSideBar from '../MenuSideBar'
import { selectAuth } from 'features/auth/authSlice'
import { useAppSelector } from 'hooks/useApp'
import { getImageUrl } from 'utils/utils'

const Container = styled.div`
  width: 20rem;
  flex-shrink: 0;
`

const HeaderSideBar = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 1.5rem 0;
  border-bottom: 1px solid ${colors['gray-light-2']};
  height: 8rem;
`
const RightHeader = styled.div`
  flex: 1;
  overflow: hidden;
`

const UserNameOrEmail = styled.div`
  font-weight: 600;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 100%;
  margin-bottom: 0.5rem;
`
const LinkEdit = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${colors['gray-text']};
`

const UserSideBar = () => {
  const { user } = useAppSelector(selectAuth)

  return (
    <Container>
      <HeaderSideBar>
        <Avatar src={user?.avatar ? getImageUrl(user.avatar) : null} size={50} style={{ flexShrink: 0 }} />
        <RightHeader>
          <UserNameOrEmail>{user?.email}</UserNameOrEmail>
          <LinkEdit to={`${routePaths.user}/${routePaths.userAccount}/${routePaths.userProfile}`}>
            <FontAwesomeIcon icon={faPen} />
            Sửa Hồ Sơ
          </LinkEdit>
        </RightHeader>
      </HeaderSideBar>

      <MenuSideBar />
    </Container>
  )
}

export default UserSideBar
