import { Avatar } from 'antd'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'

import routePaths from 'constants/routePaths'
import colors from 'constants/colors'
import MenuSideBar from '../MenuSideBar'

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
  return (
    <Container>
      <HeaderSideBar>
        <Avatar
          src='https://cf.shopee.vn/file/2d7d51ffc7af8cdc00d086c882d5e020_tn'
          size={50}
          style={{ flexShrink: 0 }}
        />
        <RightHeader>
          <UserNameOrEmail>lemanhddt@gmail.com</UserNameOrEmail>
          <LinkEdit to={routePaths.userProfile}>
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
