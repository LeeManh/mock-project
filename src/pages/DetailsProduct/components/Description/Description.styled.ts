import colors from 'constants/colors'
import styled from 'styled-components'
import { Wrap } from 'pages/DetailsProduct/DetailsProduct.styled'

export const DescriptionWrap = styled(Wrap)`
  margin-top: 2rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
`
export const DescriptionTitle = styled.div`
  text-transform: uppercase;
  font-size: 1.6rem;
  font-weight: 500;
  padding: 1.5rem 2rem;
  background-color: ${colors['white-2']};
  border-radius: 2px;
  width: 100%;
`
export const DescriptionContent = styled.div`
  margin-top: 3rem;
`
