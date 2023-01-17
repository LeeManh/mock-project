import colors from 'constants/colors'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  padding: 2rem 0;
  border-bottom: 1px solid ${colors['gray-light-2']};
`
const Title = styled.div`
  text-transform: capitalize;
  font-size: 1.8rem;
`
const Describe = styled.div`
  margin-top: 0.5rem;
  color: ${colors['gray-text']};
`

interface Props {
  title?: string
  describe?: string
}

const HeaderUserLayout = ({ title, describe }: Props) => {
  return (
    <Container>
      {title && <Title>{title}</Title>}
      {describe && <Describe>{describe}</Describe>}
    </Container>
  )
}

export default HeaderUserLayout
