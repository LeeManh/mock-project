import React from 'react'
import styled from 'styled-components'
import { Outlet } from 'react-router-dom'

import breakPonits from 'constants/breakPoints'
import { ContainerGlobal, Wrapper } from 'globalStyle.styled'
import UserSideBar from './UserSideBar'

const Container = styled(ContainerGlobal)``
const Wrap = styled(Wrapper)`
  display: flex;
  gap: 2rem;

  @media screen and (max-width: ${breakPonits.md}) {
    flex-direction: column;
  }
`

interface Props {
  children?: React.ReactNode
}

const UserLayout = ({ children }: Props) => {
  return (
    <Container>
      <Wrap>
        <UserSideBar />

        <div style={{ flex: 1 }}>
          {children}
          <Outlet />
        </div>
      </Wrap>
    </Container>
  )
}

export default UserLayout
