import colors from 'constants/colors'
import styled from 'styled-components'
import { TitleSection } from '../../CheckOutPage.styled'

export const Container = styled.div`
  margin-top: 2rem;
`
export const Grid = styled.div`
  display: grid;
  grid-template-columns: 5fr 2fr 2fr 1fr;
`
export const Header = styled(Grid)`
  align-items: center;
  background-color: ${colors.white};
  padding: 3rem 3rem 2rem;
  gap: 1rem;
`
export const TitleHeader = styled(TitleSection)``
const Title = styled.div`
  color: ${colors['gray-text']};
  text-align: center;
`
export const TitlePrice = styled(Title)``
export const TitleQuantity = styled(Title)``
export const TitleTotalPrice = styled(Title)`
  text-align: right;
`

export const Content = styled.div``
