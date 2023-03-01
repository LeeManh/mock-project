import styled from 'styled-components'
import { ContainerGlobal } from 'globalStyle.styled'
import colors from 'constants/colors'

export const Container = styled(ContainerGlobal)``
export const ContentWrap = styled.div`
  margin-top: 3rem;
  display: flex;
  gap: 2rem;
`
export const ProductSection = styled.div`
  width: 100%;
  position: relative;
`
export const TitleSearchProduct = styled.div`
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  color: ${colors['gray-text-2']};
  font-size: 1.6rem;

  .text-orange {
    color: ${colors.orange};
  }
`
