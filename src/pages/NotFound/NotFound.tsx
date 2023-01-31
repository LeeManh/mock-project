import Button from 'components/Button'
import routePaths from 'constants/routePaths'
import { Link, useNavigate } from 'react-router-dom'

import {
  Bottom,
  Container,
  EyeLeftGhost,
  EyeRightGhost,
  FaceGhost,
  Ghost,
  GhostContainer,
  GhostCoppy,
  MounthGhost,
  ShadowGhost,
  Top
} from './NotFound.styled'

const NotFound = () => {
  const navigate = useNavigate()

  return (
    <Container>
      <Top>
        <h1>404</h1>
        <h3>PAGE NOT FOUND</h3>
      </Top>

      <GhostContainer>
        <GhostCoppy>
          <div className='one'></div>
          <div className='two'></div>
          <div className='three'></div>
          <div className='four'></div>
        </GhostCoppy>
        <Ghost>
          <FaceGhost>
            <EyeLeftGhost />
            <EyeRightGhost />
            <MounthGhost />
          </FaceGhost>
        </Ghost>
        <ShadowGhost />
      </GhostContainer>

      <Bottom>
        <p>Boo, looks like a ghost stole this page!</p>

        <div className='btn-group'>
          <Button typeBtn='primary' style={{ minWidth: '8rem' }} onClick={() => navigate(routePaths.home)}>
            Home
          </Button>

          <Button typeBtn='default' style={{ minWidth: '8rem' }} onClick={() => navigate(-1)}>
            Back
          </Button>
        </div>
      </Bottom>
    </Container>
  )
}

export default NotFound
