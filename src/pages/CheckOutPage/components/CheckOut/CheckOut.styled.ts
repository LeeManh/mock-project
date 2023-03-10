import Button from 'components/Button'
import breakPonits from 'constants/breakPoints'
import colors from 'constants/colors'
import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${colors.white};
  margin-top: 2rem;
  padding: 3rem;
`
export const InforPrice = styled.div`
  display: grid;
  grid-template-columns: 1fr max-content max-content;
  grid-template-rows: auto;
  grid-column-gap: 1rem;
  color: ${colors['gray-text']};
  gap: 2rem;
  padding: 2rem 0;
  font-size: 1.6rem;
  align-items: center;

  @media screen and (max-width: ${breakPonits.xs}) {
    grid-template-columns: 1fr;
  }
`
export const LabelPrice = styled.div`
  text-align: left;
  @media screen and (max-width: ${breakPonits.xs}) {
    text-align: right;
  }
`
export const PriceText = styled.div`
  text-align: right;
`
export const TotalPrice = styled(PriceText)`
  color: ${colors.orange};
  font-size: 3rem;
  @media screen and (max-width: ${breakPonits.xs}) {
    font-size: 2rem;
  }
`

export const FooterCheckOut = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const FooterRules = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media screen and (max-width: ${breakPonits.lg}) {
    display: none;
  }
`
export const LinkRules = styled.div`
  color: ${colors.blue};
  cursor: pointer;
`
export const ButtonCheckOut = styled(Button)`
  text-transform: uppercase;
  width: 20rem;
  margin-left: auto;
`
